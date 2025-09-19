// floating-menu.js
(function() {
    'use strict';
    
    // Configuration
    const config = {
        menuButtonPosition: 'left',
        menuButtonColor: '#2563eb',
        menuButtonHoverColor: '#1d4ed8',
        animationDuration: 300,
        categories: [
            // ... (paste your entire categories array here)
            {
                name: "Aksesoris Komputer & Laptop",
                href: "https://www.prinin.web.id",
                children: [
                    // ... all your categories data
                ]
            },
            // ... rest of your categories
        ]
    };
    
    // Create the floating menu
    function createFloatingMenu() {
        // Create menu button
        const menuButton = document.createElement('button');
        menuButton.id = 'floatingMenuButton';
        menuButton.className = 'w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 fixed z-40';
        menuButton.style.backgroundColor = config.menuButtonColor;
        menuButton.style.top = '50%';
        menuButton.style.transform = 'translateY(-50%)';
        menuButton.style[config.menuButtonPosition] = '24px';
        menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        
        // Add hover effect
        menuButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = config.menuButtonHoverColor;
        });
        menuButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = config.menuButtonColor;
        });
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'floatingMenuOverlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden opacity-0 transition-opacity duration-300';
        
        // Create menu container
        const menuContainer = document.createElement('div');
        menuContainer.id = 'floatingMenuContainer';
        menuContainer.className = 'fixed inset-0 flex items-center justify-center z-50 hidden';
        
        // Create menu content
        menuContainer.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl w-11/12 max-w-4xl h-5/6 category-menu fade-in">
                <div class="flex justify-between items-center p-4 border-b">
                    <h2 class="text-xl font-bold text-gray-800">Product Categories</h2>
                    <button id="closeFloatingMenu" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <div class="p-4 border-b">
                    <div class="relative">
                        <input type="text" id="searchFloatingMenu" placeholder="Search categories..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <div class="absolute right-3 top-2.5 text-gray-400">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                    <div id="floatingMenuSearchResults" class="mt-2 hidden">
                        <p class="text-sm text-gray-600">No results found</p>
                    </div>
                </div>
                <div class="p-4 overflow-y-auto">
                    <div id="floatingMenuContent" class="space-y-2"></div>
                </div>
            </div>
        `;
        
        // Add elements to body
        document.body.appendChild(menuButton);
        document.body.appendChild(overlay);
        document.body.appendChild(menuContainer);
        
        // Initialize menu
        initMenu();
    }
    
    // Initialize menu functionality
    function initMenu() {
        const menuButton = document.getElementById('floatingMenuButton');
        const overlay = document.getElementById('floatingMenuOverlay');
        const menuContainer = document.getElementById('floatingMenuContainer');
        const closeButton = document.getElementById('closeFloatingMenu');
        const menuContent = document.getElementById('floatingMenuContent');
        const searchInput = document.getElementById('searchFloatingMenu');
        const searchResults = document.getElementById('floatingMenuSearchResults');
        
        // Generate menu HTML
        menuContent.innerHTML = generateMenuHTML(config.categories);
        
        // Toggle menu function
        function toggleMenu() {
            overlay.classList.toggle('hidden');
            menuContainer.classList.toggle('hidden');
            
            if (!overlay.classList.contains('hidden')) {
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    overlay.classList.add('opacity-100');
                    searchInput.value = '';
                    filterMenu('');
                    searchInput.focus();
                }, 10);
            } else {
                overlay.classList.remove('opacity-100');
                overlay.classList.add('opacity-0');
            }
        }
        
        // Event listeners
        menuButton.addEventListener('click', toggleMenu);
        closeButton.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Search functionality
        searchInput.addEventListener('input', (e) => {
            filterMenu(e.target.value);
        });
        
        // Add toggle functionality to category items with children
        document.addEventListener('click', function(e) {
            if (e.target.closest('.toggle-icon')) {
                const item = e.target.closest('.category-item');
                const toggleIcon = item.querySelector('.toggle-icon');
                
                // Find the next element which should be the submenu
                let nextElement = item.nextElementSibling;
                while (nextElement && !nextElement.classList.contains('submenu')) {
                    nextElement = nextElement.nextElementSibling;
                }
                
                if (nextElement && nextElement.classList.contains('submenu')) {
                    nextElement.classList.toggle('visible');
                    toggleIcon.classList.toggle('rotated');
                    
                    // Prevent the click from triggering the link
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
        
        // Function to generate menu HTML with links
        function generateMenuHTML(categories, level = 0) {
            let html = '';
            const padding = level * 20;
            
            categories.forEach(category => {
                const hasChildren = category.children && category.children.length > 0;
                const href = category.href || '#';
                
                html += `
                    <div class="category-item rounded-lg py-2 px-4 cursor-pointer" style="padding-left: ${padding}px">
                        <div class="flex justify-between items-center">
                            <a href="${href}" class="font-medium flex-1 hover:underline">${category.name}</a>
                            ${hasChildren ? '<i class="fas fa-chevron-down text-xs toggle-icon"></i>' : ''}
                        </div>
                    </div>
                `;
                
                if (hasChildren) {
                    html += `
                        <div class="submenu" style="padding-left: ${padding + 20}px">
                            ${generateMenuHTML(category.children, level + 1)}
                        </div>
                    `;
                }
            });
            
            return html;
        }
        
        // Function to filter menu based on search query
        function filterMenu(query) {
            const allItems = menuContent.querySelectorAll('.category-item');
            const allSubmenus = menuContent.querySelectorAll('.submenu');
            
            if (!query) {
                // Show all items if no query
                allItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                
                // Reset all submenus to their default state
                allSubmenus.forEach(submenu => {
                    submenu.classList.remove('visible');
                });
                
                // Reset all toggle icons
                const allIcons = menuContent.querySelectorAll('.toggle-icon');
                allIcons.forEach(icon => {
                    icon.classList.remove('rotated');
                });
                
                searchResults.classList.add('hidden');
                return;
            }
            
            const lowerQuery = query.toLowerCase();
            let foundMatch = false;
            
            // First hide all items
            allItems.forEach(item => {
                item.classList.add('hidden');
            });
            
            // Show only matching items and their parents
            allItems.forEach(item => {
                const itemText = item.querySelector('a').textContent.toLowerCase();
                
                if (itemText.includes(lowerQuery)) {
                    foundMatch = true;
                    
                    // Show this item
                    item.classList.remove('hidden');
                    
                    // Show all parent items and expand their submenus
                    let currentItem = item;
                    while (currentItem) {
                        currentItem.classList.remove('hidden');
                        
                        // If this item has a submenu, expand it
                        const toggleIcon = currentItem.querySelector('.toggle-icon');
                        if (toggleIcon) {
                            let nextElement = currentItem.nextElementSibling;
                            while (nextElement && !nextElement.classList.contains('submenu')) {
                                nextElement = nextElement.nextElementSibling;
                            }
                            
                            if (nextElement && nextElement.classList.contains('submenu')) {
                                nextElement.classList.add('visible');
                                toggleIcon.classList.add('rotated');
                            }
                        }
                        
                        // Move to the parent item
                        currentItem = currentItem.previousElementSibling;
                        while (currentItem && !currentItem.classList.contains('category-item')) {
                            currentItem = currentItem.previousElementSibling;
                        }
                    }
                }
            });
            
            // Show search results if no matches found in the menu
            if (!foundMatch) {
                const results = searchCategories(query);
                displaySearchResults(results, query);
            } else {
                searchResults.classList.add('hidden');
            }
        }
        
        // Function to search through categories
        function searchCategories(query) {
            const results = [];
            const lowerQuery = query.toLowerCase();
            
            function searchInCategory(category, path = '') {
                const currentPath = path ? `${path} > ${category.name}` : category.name;
                
                if (category.name.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        name: category.name,
                        href: category.href || '#',
                        path: currentPath
                    });
                }
                
                if (category.children) {
                    category.children.forEach(child => {
                        searchInCategory(child, currentPath);
                    });
                }
            }
            
            config.categories.forEach(category => {
                searchInCategory(category);
            });
            
            return results;
        }
        
        // Function to display search results
        function displaySearchResults(results, query) {
            searchResults.innerHTML = '';
            
            if (results.length === 0) {
                searchResults.innerHTML = '<p class="text-sm text-gray-600 p-2">No results found</p>';
                searchResults.classList.remove('hidden');
                return;
            }
            
            searchResults.classList.remove('hidden');
            
            const resultsList = document.createElement('div');
            resultsList.className = 'space-y-2';
            
            results.forEach(result => {
                const resultItem = document.createElement('a');
                resultItem.href = result.href;
                resultItem.className = 'block p-2 rounded hover:bg-gray-100 transition-colors';
                
                // Highlight the search term in the result
                const highlightedName = highlightText(result.name, query);
                const highlightedPath = highlightText(result.path, query);
                
                resultItem.innerHTML = `
                    <div class="font-medium">${highlightedName}</div>
                    <div class="text-xs text-gray-500">${highlightedPath}</div>
                `;
                
                resultsList.appendChild(resultItem);
            });
            
            searchResults.appendChild(resultsList);
        }
        
        // Function to highlight text in search results
        function highlightText(text, searchTerm) {
            if (!searchTerm) return text;
            
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        }
    }
    
    // Initialize the menu when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createFloatingMenu);
    } else {
        createFloatingMenu();
    }
    
})();
