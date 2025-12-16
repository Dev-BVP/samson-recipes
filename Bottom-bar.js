// This function creates and adds the print-specific style rule.
(function() {
  // Check if the style has already been added to prevent duplicates
  if (document.getElementById('no-print-style')) {
    return;
  }

  // Create a new <style> element
  const style = document.createElement('style');
  style.id = 'no-print-style'; // Give it an ID for easy reference

  // Define the CSS rule for print media.
  style.textContent = `
    @media print {
      .no-print {
        display: none !important;
      }
    }
  `;

  // Append the <style> element to the document's head
  document.head.appendChild(style);
})();


// This function creates and adds the navigation bar as a footer.
(function() {
  // 1. Create the <nav> element.
  const nav = document.createElement('nav');
  nav.classList.add('no-print'); // The no-print class is already applied here
  nav.style.backgroundColor = "#E6E6E6";
  nav.style.color = "#fff";
  nav.style.display = "flex";
  nav.style.justifyContent = "space-around";
  nav.style.padding = "10px 20px";
  nav.style.fontFamily = "sans-serif";

  // 2. Define the links and create the <a> elements.
  const links = [
    { text: 'Home', url: 'index.html' },
    { text: 'About', url: 'about.html' },
    { text: 'Staff', url: 'staff.html' },
    { text: 'Information', url: 'info.html' },
    { text: 'Status', url: 'https://stats.uptimerobot.com/yyyK0XGlqJ' },
  ];

  links.forEach(linkData => {
    const a = document.createElement('a');
    a.href = linkData.url;
    a.textContent = linkData.text;
    
    // Set link styling directly via the style property
    a.style.color = "#000000";
    a.style.textDecoration = "none";
    a.style.padding = "14px 16px";
    a.style.transition = "background-color 0.3s";

    // Add a simple hover effect with an event listener
    a.addEventListener('mouseenter', () => {
      a.style.backgroundColor = "#B5B5B5";
    });
    a.addEventListener('mouseleave', () => {
      a.style.backgroundColor = "#E6E6E6";
    });

    nav.appendChild(a);
  });

  // 3. Append the navigation bar to the document body.
  document.body.appendChild(nav);
})();
