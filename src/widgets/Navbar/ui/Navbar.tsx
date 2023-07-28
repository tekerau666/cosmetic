import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    //TODO: Реализовать декоратор RouterDecorator в preview.ts чтобы не использовать <MemoryRouter>
  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>

            </div>
        </div>
  )
}
