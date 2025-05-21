import { NavLink } from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-100 text-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-900">ODO</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
                  }`
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/shop"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
                  }`
                }
              >
                Shop
              </NavLink>
              
              <NavLink
                to="/deal"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
                  }`
                }
              >
                Deals
              </NavLink>
              
              <NavLink
                to="/categories"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
                  }`
                }
              >
                Categories
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
          
          {/* Mobile menu button (optional) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (optional) */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-700 hover:bg-blue-200 hover:text-blue-900'
              }`
            }
          >
            Home
          </NavLink>
          {/* Repeat for other links */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;