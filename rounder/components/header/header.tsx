import s from "./header.module.css"

type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {

    

    return (
        <div className={s.container}>
            {title}
        </div>)
};