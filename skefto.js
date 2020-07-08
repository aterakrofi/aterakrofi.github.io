(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "status",
            alias: "status",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "name",
            alias: "name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "location",
            dataType: tableau.dataTypeEnum.geometry
        }];

        var tableSchema = {
            id: "skefto",
            alias: "Skefto Test",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };







    myConnector.getData = function(table, doneCallback) {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiIwYTI5NTRhYS0wOWVmLTRjMjEtYTBmYy1kZDQ4NDMwNzViMjQiLCJpYXQiOjE1OTM4MTY2Mzh9.tdKyy-1nYbOE6jwqhIio0KzqQUVYyi_JbEX3OdNfwhg");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://159.65.9.196/api/plans", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));





        //$.getJSON("http://159.65.9.196/api/plans", function(resp) {

            var feat = requestOptions.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "id": feat[i].id,
                    "createdAt": feat[i].properties.createdAt,
                    "status": feat[i].properties.status,
                    "name	": feat[i].name
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Skefto API Source"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
