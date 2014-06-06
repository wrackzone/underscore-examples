Ext.define("UnderscoreExamples", function() {

    var self;

    return {

        constructor:function(config) {

            self = this;
            this.initConfig(config);
            return this;

        },

        config : {

        },

        snapshots : [

            { state: "open"  , planestimate:12 },
            { state: "open"  , planestimate:5  },
            { state: "closed", planestimate:3  },
            { state: "closed", planestimate:1  }

        ],

        each : function() {

            _.each( self.snapshots, function(s,i) {
                console.log(i,s.state);
            });

        },

        filter : function() {

            var open = _.filter( self.snapshots , function(s) {
                return s.state === "open";
            });
            return open;

            // { state:"open"  , planestimate:12 },
            // { state:"open"  , planestimate:5  },


        },

        filterFunction : function(f) {

            var filtered = _.filter( self.snapshots , f );
            return filtered;

        },

        groupBy : function() {

            var groupedByState = _.groupBy(self.snapshots, function(s) { return s.state; } );

            return groupedByState;

            // {
            //     "open" : [{ state:"open"  , planestimate:12 }, { state:"open", planestimate:5}],
            //     "closed" : [ { state:"closed", planestimate:3 }, { state:"closed", planestimate:1 } ]
            // }

        },

        keys : function() {

            var keys = _.keys( self.groupBy() );

            return keys;

            // ["open","closed"]

        },

        uniq : function() {

            return _.uniq( _.pluck(snapshots,"state"));

            // ["open","closed"]

        },

        values : function() {

            var values = _.values( self.groupBy() );

            /*
            [ 
                [{state:"open",planestimate:12},{state:"open",planestimate:5}],
                [{state:"closed",planestimate:3] 
            ]
             */

            return values;

        },

        reduce : function() {

            var grouped = self.groupBy();

            var keys = _.keys(grouped); // [ "open","closed" ]

            var summary = _.map( keys , function(key) {

                var value = grouped[key]; // eg. [{state:"open",planestimate:12},{state:"open",planestimate:5}]

                return { state : key,
                    total : _.reduce( value, function( memo , v ) {
                        return memo + v.planestimate;
                    } , 0 )
                };

            } );

            // [ { state : "open", total : 17 },
            //   { state : "closed", total : 3 } ]
            return summary;

        },

        sortBy : function() {

            var arr = [ [1,2,3], [1,2], [1], [12] ];
            var s = _.sortBy(arr,"length");
            // [ [1], [1,2], [1,2,3] ];


            var s = _.sortBy(arr,function(e) {
                return _.reduce( e, function( memo, v) { return memo + v }, 0);
            });

            return s;

        },

        last : function() {

            var l = _.map( self.values(), function (v) {
                return _.last( _.sortBy( v, "planestimate" ));
            });
            // [{state:"open",planestimate:12},{state:"closed",planestimate:3}]
            return l;

        },

        min : function() {
            var start = _.min(_.pluck(releases,function(r) { return r.get("ReleaseStartDate");}));
        },

        max : function() {
            var end   = _.max(_.pluck(releases,function(r) { return r.get("ReleaseDate");}));
        },


        map : function() {

        },

        compact : function() {

        },


        find : function() {

        },


        pluck : function() {

        },

        indexOf : function() {

        },

        isObject : function() {

        },

        isNull : function() {

        },

        isUndefined : function() {

        }

    }
});
