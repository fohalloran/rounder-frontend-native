import s from "./card.module.css"

type TxProps = {
    title: string;
    body: string|number;
    footer: string;
};

export default function Card({ title, body, footer }: TxProps) {

    return (
        <div className={s.container}>
            <div className={s.grid}>
                <div className={s.title}>{title}</div>
                <div className={s.body}>£{body}</div>
                <div className={s.footer}>{footer}</div>
            </div>
        </div>)
};