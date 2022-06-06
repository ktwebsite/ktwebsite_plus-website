function userAgentTheme(scheme){
    switch(scheme){
        case "dark":
            var linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = './css/theme/dark.css';
            document.head.appendChild(linkElement);
            break;
        case "light":
            document.head.removeChild(linkElement);
            var linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = './css/theme/light.css';
            document.head.appendChild(linkElement);
            break;
        default:
            var linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = './css/theme/light.css';
            document.head.appendChild(linkElement);
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
    colorSchemeQuery.addEventListener('change', userAgentTheme(getPreferredColorScheme()));
  }