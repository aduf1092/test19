const fs = require('fs');
const path = require('path');

function fixPaths(directory) {
    // Read all HTML files
    fs.readdirSync(directory).forEach(file => {
        if (file.endsWith('.html')) {
            let filePath = path.join(directory, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Fix common path issues
            content = content.replace(/src="(?!http|\/\/)/g, 'src="/');
            content = content.replace(/href="(?!http|\/\/)/g, 'href="/');
            
            fs.writeFileSync(filePath, content);
        }
    });
}

// Run on current directory
fixPaths('.');