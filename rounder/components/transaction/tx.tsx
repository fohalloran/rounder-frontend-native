import s from "./tx.module.css"

type TxProps = {
    rawAmount: number;
    delta: number;
    location: string;
};

export default function Transaction({ rawAmount, location, delta }: TxProps) {
    console.log(rawAmount)

    return (
        <div>
            <div className={s.grid}>
                <div className={s.left}>
                    <h1 className={s.item}>{location}</h1>
                </div>
                <div className={s.right}>
                    <h1 className={s.item}>£{rawAmount}</h1>
                </div>
                <div>
                    <h1 className={s.delta}>£{delta}</h1>
                </div>
            </div>
        </div>)
};