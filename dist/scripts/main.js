"use strict";!function(e){function t(){void 0!==n&&clearTimeout(n),n=setTimeout(function(){var t=o.getValue();e("#render-stage iframe").remove(),e("#render-stage").append(e('<iframe id="tone-executor">')),e("#tone-executor").contents().find("body").append(e("<script>").html(t))},2e3)}var n,o=ace.edit("editor"),i=o.getSession();o.setTheme("ace/theme/monokai"),i.setMode("ace/mode/javascript"),i.on("change",function(){t()})}(jQuery);