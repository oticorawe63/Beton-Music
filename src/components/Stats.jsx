import React from 'react';

const statsData = [
    { num: '01', title: '10+ лет опыта', subtitle: 'в продюссировании' },
    { num: '02', title: 'Работали с:', subtitle: 'Ramil, Mona, Султан Лагучев, Настасья Самбурская и другие' },
    { num: '03', title: 'Юридическая чистота', subtitle: 'Подписываем договор передачи авторских прав' },
    { num: '04', title: 'Сроки выполнения', subtitle: 'Сдача мастера за 48 часов' },
];

const Stats = () => {
    return (
        <section id="benefits" className="w-full bg-gradient-to-r from-[#1c048c] via-[#2f09a3] to-[#4b11c5] py-24 flex justify-center px-4 relative">
            <div className="max-w-6xl w-full flex flex-col items-center">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Почему вам стоит выбрать нас?
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-sm">
                        Наши преимущества в работе:<br />

                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full px-2 md:px-10">
                    {statsData.map((stat, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col p-4 md:p-6 bg-[#10042c] hover:bg-[#160833] border border-white/5 rounded-2xl transition-colors duration-150 relative overflow-hidden min-h-[140px] md:min-h-[160px] justify-start hover:border-white/20"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-white/40 text-xs md:text-sm font-medium">{stat.num}</span>
                            </div>

                            <div className="mt-4 md:mt-6">
                                <h4 className="text-white font-bold text-sm md:text-lg leading-tight">{stat.title}</h4>
                                <div className="text-white/60 font-medium text-xs md:text-base mt-2">{stat.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;
