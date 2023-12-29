import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
// style
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink className={cls.mainLink} theme={AppLinkTheme.PRIMARY} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
    </div>
  </div>
);

export { Navbar };
