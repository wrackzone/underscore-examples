Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function() {
        //Write app code here
        var us = Ext.create("UnderscoreExamples",{});

        console.log("filter");
        console.log(us.filter());


        console.log("groupBy");
        console.log(us.groupBy());

        console.log("keys");
        console.log(us.keys());

        console.log("each");
        us.each();

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

        console.log("reduce");
        console.log(us.reduce());




    }
});
