import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

interface TextDecryptProps {
    text: string;
    interval: number;
}

const decryptOptions = {
    chars: [
        'ア', 'イ', 'ウ', 'エ', 'オ',
        'カ', 'キ', 'ク', 'ケ', 'コ',
        'サ', 'シ', 'ス', 'セ', 'ソ',
        'タ', 'チ', 'ツ', 'テ', 'ト',
        'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
        'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
        'マ', 'ミ', 'ム', 'メ', 'モ',
        'ヤ', 'ユ', 'ヨ', 'ー',
        'ラ', 'リ', 'ル', 'レ', 'ロ',
        'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
        'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
        'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
        'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
        'バ', 'ビ', 'ブ', 'ベ', 'ボ',
        'パ', 'ピ', 'プ', 'ペ', 'ポ',
    ]    
};

const TextDecrypt: React.FC<TextDecryptProps> = (props) => {
    const [result, dencrypt] = useDencrypt({
        chars: decryptOptions.chars.join(''), // Join the array into a string
        interval: props.interval,
    });

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <p>
          {result}
          {" "}
        </p>
    );
};

export default TextDecrypt