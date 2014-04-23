Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function() {
        //Write app code here
        var us = Ext.create("UnderscoreExamples",{});

        console.log("each");
        us.each();

        var openFilter = function(s) {
            return s.state === "open";
        };

        var closedFilter = function(s) {
            return s.state === "closed";
        }

        console.log("filter");
        console.log(us.filter());

        console.log("filterOpen");
        console.log(us.filterFunction( openFilter ));

        console.log("filterClosed");
        console.log(us.filterFunction( closedFilter ));


        console.log("groupBy");
        console.log(us.groupBy());

        console.log("reduce");
        console.log(us.reduce());

        console.log("keys");
        console.log(us.keys());

        console.log("sortBy");
        console.log(us.sortBy());

        console.log("values");
        console.log(us.values());

        console.log("last");
        console.log(us.last());

        console.log("map");
        console.log(us.map());

        console.log("compact");
        console.log(us.compact());





    }
});
