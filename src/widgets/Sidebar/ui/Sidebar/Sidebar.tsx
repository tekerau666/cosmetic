import cls from './Sidebar.module.scss'
import {FC, useState} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ThemeSwitcher} from "../../../../widgets/ThemeSwitcher";
import {LangSwitcher} from "../../../LangSwitcher/index";



interface SidebarProps {
	className?: string,
}

export const Sidebar:FC<SidebarProps> = ({ children, className }) => {

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}

	return (
		<>
			<div
				className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className || ''])}
			>
				<button onClick={onToggle}>toggle</button>
				<div className={cls.switchers}>
					<ThemeSwitcher/>
					<LangSwitcher className={cls.lang}/>
				</div>
			</div>
		</>
	)
}