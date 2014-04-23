Ext.define("UnderscoreExamples", function() {

    var self;

    return {

        config : {
        },

        constructor:function(config) {

            self = this;
            this.initConfig(config);
            return this;

        },

        each : function() {

            _.each( self.keys(), function(k,i) {
                console.log(k,i);
            });

            /*
             "open", 0
             "closed", 1
             */
        },

        filter : function() {

            var snaps = [{state:"open",planestimate:12},{state:"open",planestimate:5},{state:"closed",planestimate:3}];

            var open = _.filter( snaps, function(e) {
                return e.state ==="open";
            });

            return oldies;

        },

        groupBy : function() {

            var snaps = [{state:"open",planestimate:12},{state:"open",planestimate:5},{state:"closed",planestimate:3}];

            groupedByState = _.groupBy(snaps, function(s) { return s.state;});

            /*
            {
                open : [{state:"open",planestimate:12},{state:"open",planestimate:5}],
                closed : [{state:"closed",planestimate:3]
            }
            */

            return groupedByState;

        },

        keys : function() {

            var keys = _.keys( self.groupBy () );

            // ["open","closed"]

            return keys;

        },

        values : function() {

            var values = _.values( self.groupBy() );

            /*
             [ [{state:"open",planestimate:12},{state:"open",planestimate:5}],
             [{state:"closed",planestimate:3] ]
             */

            return values;

        },


        sortBy : function() {

            var arr = [ [1,2,3], [1,2], [1] ];
            var s = _.sortBy(arr,"length");
            // [ [1], [1,2], [1,2,3] ];
            return s;

        },



        last : function() {

            var l = _.map( self.values(), function (v) {
                return _.last( _.sortBy( v, "planestimate" ));
            });
            // [{state:"open",planestimate:12},{state:"closed",planestimate:3}]
            return l;

        },

        map : function() {

        },

        compact : function() {

        },

        reduce : function() {

            var values = self.values();

            /*
             [ [{state:"open",planestimate:12},{state:"open",planestimate:5}],
             [{state:"closed",planestimate:3] ]
             */

            var summary = _.map( values , function(value) {
                return { state : value[0].state,
                    total : _.reduce( value, function( v, memo ) {
                        return memo + v.planestimate;
                    } ,0 )
                };
            } );

            // [ { state : "open", total : 17 },
            //   { state : "closed", total : 3 } ]
            return summary;

        },

        find : function() {

        },

        min : function() {
            var start = _.min(_.pluck(releases,function(r) { return r.get("ReleaseStartDate");}));
        },

        max : function() {
            var end   = _.max(_.pluck(releases,function(r) { return r.get("ReleaseDate");}));
        },

        pluck : function() {

        },

        uniq : function() {

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
