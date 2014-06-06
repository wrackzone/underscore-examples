Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function() {

        var config = {
            "1" : ["A","B"],
            "2" : ["C","D"]
        };

        var objs = [ { name : "A", tags : ["A","B","C"]},
            { name : "B", tags : ["A"]},
            { name : "C", tags : ["C"]},
            { name : "D", tags : ["D"]}
        ] ;

        var buckets = _.map(_.keys(config), function(k) {

            var searchFor = config[k];

            var results = _.filter( objs, function(obj) {
                return _.intersection(obj.tags,searchFor).length >0;
            })

            return {
                bucket : k,
                results : results
            };

        });

        console.log("buckets",buckets);

        var g = _.groupBy(objs,function(o) {
            return o.tags;
        });

        console.log("g",g);


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
