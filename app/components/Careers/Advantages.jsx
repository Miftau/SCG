"use client";

export default function Advantages() {
  return (
    <div className="container mt-32 text-center">
      {/* Heading */}
      <h1 className="lg:text-4xl text-xl mb-6 font-bold">Advantages</h1>
      <p>
        We provide a flexible work environment, continuous training, and rewards
        for outstanding performance.
      </p>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center ml-16 sm:mx-auto gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Group%202578-D7likXqi.svg" alt="Training Assistance" />
          <h1 className="text-center text-xs">Training / Educational Assistance</h1>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Group%202589-opip1_NG.svg" alt="Leave Policy" />
          <h1 className="text-center text-xs">Personal and Sick Leave</h1>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Group%202590-CX4IN7Eu.svg" alt="Bonuses" />
          <h1 className="text-center text-xs">
            Bonuses (Outstanding Performance, Goal Achievement, Milestone Completion)
          </h1>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Group%202591-Bb5tZFtO.svg" alt="Health Insurance" />
          <h1 className="text-center text-xs">Health Insurance</h1>
        </div>
      </div>
    </div>
  );
}
