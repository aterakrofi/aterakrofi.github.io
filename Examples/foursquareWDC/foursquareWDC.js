// This function parses the access token in the URI if available
  // It also adds a link to the foursquare connect button
  $(document).ready(function() {
      var accessToken = Cookies.get("accessToken");
      var hasAuth = accessToken && accessToken.length > 0;
      updateUIWithAuthState(hasAuth);
//
      $("#connectbutton").click(function() {
          doAuthRedirect();
      });

      $("#getvenuesbutton").click(function() {
          tableau.connectionName = "Foursquare Venues Data";
          tableau.submit();
      });
  });
