import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const links = [
    {
      href: '/margaritas',
      content: 'Margaritas'
    },
    {
      href: '/mojitos',
      content: 'Mojitos'
    },
    {
      href: '/daiquiri',
      content: 'Daiquiri'
    }
  ];

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-black/50 shadow-sm shadow-gray-50">
      <nav className="py-2">
        <div className="container px-2 mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="https://www.svgrepo.com/show/422181/alcohol-beverage-cocktail.svg" className="w-12 h-12 object-cover" width="48" height="48"/>
          </Link>
          <ul className="flex gap-2">
            {links.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href} className={({ isActive }) => `font-semibold transition-colors hover:text-teal-500 ${isActive ? 'text-teal-500' : ''}`}>{element.content}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;