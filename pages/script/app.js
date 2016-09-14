
var app = angular.module('mainModule', ['ngDragDrop','gridster']);
// var app = angular.module('mainModule',[]);
app.controller('myCtrl', function($scope, $http){
    $scope.name = "kihwan";
    // $http.get("/get_db").then(function(response, error){
    //     $scope.list5 = response.data;
    // })
    // $scope.maplist = [];
    $scope.listofdevice = {};
    $scope.list = [];
    $scope.tree;

    $scope.changeToTree = function (arrayList) {
        Object.setPrototypeOf(arrayList, Object.prototype);
        var rootNodes = {};

        var insert_incoming = function (list){
            rootNodes.incomingNode[list.target] = rootNodes.incomingNode[list.target] || [];
            rootNodes.incomingNode[list.target].push(list.source);
        }
        var insert_outcoming = function (list){
            rootNodes.outingNode[list.source] = rootNodes.outingNode[list.source] || [];
            rootNodes.outingNode[list.source].push(list.target);
        }

        rootNodes.roadMapId = 1;
        rootNodes.clientId = 1;
        rootNodes.initNode = rootNodes.initNode || [];
        rootNodes.lastNode = rootNodes.lastNode || [];
        rootNodes.incomingNode = rootNodes.incomingNode || {};
        rootNodes.outingNode = rootNodes.outingNode || {};
        rootNodes.isInput = false;
        rootNodes.isOutput = false;
        rootNodes.mapIds = rootNodes.mapIds || {};

        for(var i=0; i<arrayList.length; ++i){
            insert_incoming(arrayList[i]);
            insert_outcoming(arrayList[i]);
        }
        $scope.tree = JSON.stringify(rootNodes, null, '   ');
        console.log("asdf"+$scope.tree);
        return rootNodes;
    };
    // var tree = $scope.changeToTree($scope.list);
    // $scope.tree = JSON.stringify(tree, null, '   ');
});
