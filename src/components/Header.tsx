import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"

const Header: FC = () => {
    return (
        <header>

            <div className="logoBox">
                <img src={logo} alt="" />
            </div>

            <nav className="headerNav">
                <ul>
                    <li>

                        <NavLink to="/">
                            Войти
                        </NavLink>

                    </li>
                    <li>

                        <NavLink to="/">
                            Заказы
                        </NavLink>

                    </li>
                    <li>

                        <NavLink to="/">
                            Избранное
                        </NavLink>

                    </li>
                    <li>

                        <NavLink to="/">
                            Корзина
                        </NavLink>

                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;