import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
    { q: "Какие сроки стандартного сведения?", a: "Наш стандартный срок выполнения — до 2 рабочих дней." },
    { q: "Могу ли я присутствовать на сессии сведения лично?", a: "Да, мы предлагаем очное присутствие для местных клиентов." },
    { q: "Предлагаете ли вы бесплатные правки?", a: "Мы включаем 2 бесплатные правки в каждый трек." },
    { q: "Где вы находитесь?", a: "Мы находимся по адресу г. Краснодар, ул. Восточно-Кругликовская, 72." }
];

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-base font-medium transition-colors ${isOpen ? 'text-accent' : 'text-white group-hover:text-accent/80'}`}>
                    {question}
                </span>
                <Plus
                    size={20}
                    className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out origin-top ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-textMuted text-sm leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section id="faq" className="w-full flex justify-center py-24 px-4">
            <div className="max-w-3xl w-full flex flex-col items-center">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Есть вопросы? <span className="text-accent">У нас есть ответы</span>
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto text-sm">
                        Ответы на часто задаваемые вопросы.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    {faqData.map((item, idx) => (
                        <FaqItem key={idx} question={`${idx + 1}. ${item.q}`} answer={item.a} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Faq;
