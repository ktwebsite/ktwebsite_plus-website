function userAgentTheme(scheme){
    switch(scheme){
        case "dark":
            // dark theme
            break;
        case "light":
            // light theme
            break;
        default:
            // default theme
            break;
    }
}

function getPreferredColorScheme() {
    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  
  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
  }