$.ajax({
  url: "/static/data.json",
  type: "GET",
  dataType: "json",
  success: function(data) {
    // Build tree-like structure of transactions
    var tree = buildTree(data);
    $("#data-flow-tree").html(tree);
    // Bind click event to transaction nodes
    $(".transaction-node").click(function() {
      // Get transaction ID from node's data attribute
      var transactionId = $(this).data("transaction-id");
      // Make AJAX request to API to get metadata for transaction
      $.ajax({
        url: "/api/metadata/" + transactionId,
        type: "GET",
        dataType: "json",
        success: function(metadata) {
          // Display metadata for transaction
          $("#transaction-metadata").html(buildMetadata(metadata));
        }
      });
    });
  }
});
