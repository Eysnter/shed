$(window).on("load", () => {
    let active = false; // 节流标记，防止重复执行
    const maxRetries = 3; // 最大重试次数
    const loadingImages = new Set(); // 用于记录正在加载的图片URL
    const preloadOffset = 0; // window.innerHeight;
    const lazyLoad = function() {
        if (active) return;
        active = true;
        setTimeout(() => {
            const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
            lazyImages.forEach((lazyImage) => {
                // 过滤已移除的图片（防止动态删除导致的错误）
                if (!document.contains(lazyImage)) {
                    // 如果图片被移除，但还在loadingImages中，需要清理
                    if (lazyImage.dataset.loading && lazyImage.dataset.src)
                        loadingImages.delete(lazyImage.dataset.src);
                    return;
                }
                const rect = lazyImage.getBoundingClientRect();
                // 视口判断：图片不在可视区域内，跳过
                if (rect.bottom < -preloadOffset || rect.top > window.innerHeight + preloadOffset) return;
                // if (rect.top > window.innerHeight || rect.bottom < 0) return;
                // 过滤隐藏的图片
                if (getComputedStyle(lazyImage).display === "none") return;
                // 过滤正在加载或已失败的图片
                if (lazyImage.dataset.loading || lazyImage.dataset.error) return;
                
                const dataSrc = lazyImage.dataset.src;
                if (!dataSrc) return;
                
                // 已经在加载，跳过
                if (loadingImages.has(dataSrc)) return;
                // 标记为正在加载
                loadingImages.add(dataSrc);
                
                // 初始化重试次数（若未设置）
                if (!lazyImage.dataset.retry) lazyImage.dataset.retry = 0;
                // 标记为加载中
                lazyImage.dataset.loading = "true";

                const tempImage = new Image();
                // 加载成功，替换src，移除lazy类和状态标记
                tempImage.onload = () => {
                    if (document.contains(lazyImage)) {
                        lazyImage.src = dataSrc;
                        lazyImage.classList.remove("lazy");
                    }
                    delete lazyImage.dataset.loading;
                    delete lazyImage.dataset.retry;
                    loadingImages.delete(dataSrc);
                };

                // 加载失败，重试或标记错误
                tempImage.onerror = () => {
                    const retries = +lazyImage.dataset.retry;
                    if (retries < maxRetries) {
                        // 递增重试次数，延迟重试（指数退避）
                        lazyImage.dataset.retry = retries + 1;
                        setTimeout(() => {
                            // 重试前检查图片是否还在文档中
                            if (!document.contains(lazyImage)) {
                                delete lazyImage.dataset.loading;
                                loadingImages.delete(dataSrc);
                                return;
                            }
                            // 重新加载
                            tempImage.src = dataSrc;
                        }, 1000 * Math.pow(2, retries));
                    } else {
                        console.error(`Lazyload '${dataSrc}' failed ${maxRetries} times`);
                        lazyImage.dataset.error = "true";
                        delete lazyImage.dataset.loading;
                        loadingImages.delete(dataSrc);
                    }
                };
                // 开始加载
                tempImage.src = dataSrc;
            });
            active = false;
        }, 200); // 轻微延迟，优化性能
    };
    const eventHandler = () => requestAnimationFrame(lazyLoad);
    document.addEventListener("scroll", eventHandler);
    window.addEventListener("resize", eventHandler);
    window.addEventListener("orientationchange", eventHandler);
    window.lazyLoadTimer = setInterval(eventHandler, 200);
    window.lazyLoadHandler = eventHandler;
    lazyLoad();
});