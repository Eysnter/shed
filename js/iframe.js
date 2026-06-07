(()=>{
window.isIframeInitialized = window.isIframeInitialized || 0;
function loadScript(url_wrapper) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.src = url_wrapper[0];
        script.onload = resolve;
        script.onerror = reject;
        if (!url_wrapper[1]) {
            script.setAttribute('is:inline', '');
            script.setAttribute('data-swup-ignore-script', '');
        }
        document.getElementsByClassName("iframe")[0].appendChild(script);
    });
}
function loadHtml(){
    document.getElementById("iframe").innerHTML = `
    <meting-js id="2608803683" server="tencent" type="playlist" fixed="true" autoplay loop order="random" preload="none" volume="0.2" mutex="true"></meting-js>
    `;
}
$(window).on('load', function() {
    loadHtml();
    $(function() { $("body").on("click", ".aplayer", function() {
        $(".aplayer-button").hasClass("aplayer-play") ?
            $(".aplayer-lrc").removeClass("lrc-show") : $(".aplayer-lrc").addClass("lrc-show")
    }) })
    const loadQueue = [
        /* busuanzi */
        ["//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js", true],
        /* APlayer script */
        ["//iamyukino.cn/statics/as-includes/global/js/aplayer/APlayer.min.js", false],
        ["//iamyukino.cn/statics/as-includes/global/js/aplayer/Meting.min.js", false]
    ];
    var loadSequence = loadQueue.reduce(function(chain, script) {
        return chain.then(function() {
            return loadScript(script).catch(function(err) {
                console.error('Script load failed:', err.target.src);
            });
        });
    }, Promise.resolve());
});
})();
