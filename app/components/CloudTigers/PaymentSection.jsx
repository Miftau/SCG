"use client";

import { motion } from "framer-motion";
const PaymentSection = () => {
  return (
    <section className="container">
      <div className="mt-32">
        {/* Main Heading */}
        <h1 className="lg:text-4xl text-xl mb-6 text-center text-xl font-bold">
          طرق الدفع
        </h1>
        {/* Payment Methods Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          
        >
          <div className="bg-white mt-4 rounded-lg shadow-thick relative flex items-center justify-center flex-wrap gap-2 py-8">
            <img
              src="/images/payment.png"
              alt="PayPal payment logo"
              width={300}
              height={300}
              className="relative z-10"
            />
            <h1 className="relative z-10" data-i18n="[html]content.body">  ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى</h1>
            <img className="absolute right-0 bottom-0" alt="" src="data:image/svg+xml,%3csvg%20width='128'%20height='107'%20viewBox='0%200%20128%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_79154)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M37.6602%2036.8624L0%2019.7064L37.6602%200L75.3205%2019.7064L37.6602%2036.8624Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M75.3204%2019.707V117.019L37.6602%20134.109V36.8626L75.3204%2019.707Z'%20fill='url(%23paint0_linear_9_79154)'/%3e%3cpath%20d='M0%2019.707L37.6602%2036.8628V134.108L0%20112.135'%20fill='url(%23paint1_linear_9_79154)'/%3e%3cpath%20d='M52.6797%2059.6992L90.3399%2076.855V174.101L52.6797%20152.127'%20fill='url(%23paint2_linear_9_79154)'/%3e%3cpath%20d='M90.3399%2076.8583L52.6797%2059.7025L90.3399%2039.9961L127.999%2059.7025L90.3399%2076.8583Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M128%2059.6992V157.011L90.3398%20174.101V76.855L128%2059.6992Z'%20fill='url(%23paint3_linear_9_79154)'/%3e%3cpath%20d='M52.6797%2059.6992L90.3399%2076.855V174.101L52.6797%20152.127'%20fill='url(%23paint4_linear_9_79154)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_79154'%20x1='54.6449'%20y1='149.782'%20x2='85.1389'%20y2='19.393'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_79154'%20x1='23.9142'%20y1='78.7382'%20x2='-25.8544'%20y2='74.2423'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_79154'%20x1='76.5939'%20y1='118.73'%20x2='26.8253'%20y2='114.234'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_79154'%20x1='107.325'%20y1='189.775'%20x2='137.819'%20y2='59.3852'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_79154'%20x1='76.5939'%20y1='118.73'%20x2='26.8253'%20y2='114.234'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_79154'%3e%3crect%20width='128'%20height='107'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>
            <img className="absolute left-0 top-0" alt="" src="data:image/svg+xml,%3csvg%20width='128'%20height='107'%20viewBox='0%200%20128%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_79145)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M37.6602%2070.1376L0%2087.2936L37.6602%20107L75.3205%2087.2936L37.6602%2070.1376Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M75.3204%2087.293V-10.0188L37.6602%20-27.1093V70.1374L75.3204%2087.293Z'%20fill='url(%23paint0_linear_9_79145)'/%3e%3cpath%20d='M0%2087.293L37.6602%2070.1372V-27.1085L0%20-5.135'%20fill='url(%23paint1_linear_9_79145)'/%3e%3cpath%20d='M52.6797%2047.3008L90.3399%2030.145V-67.1007L52.6797%20-45.1272'%20fill='url(%23paint2_linear_9_79145)'/%3e%3cpath%20d='M90.3399%2030.1417L52.6797%2047.2975L90.3399%2067.0039L127.999%2047.2975L90.3399%2030.1417Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M128%2047.3008V-50.011L90.3398%20-67.1014V30.145L128%2047.3008Z'%20fill='url(%23paint3_linear_9_79145)'/%3e%3cpath%20d='M52.6797%2047.3008L90.3399%2030.145V-67.1006L52.6797%20-45.1272'%20fill='url(%23paint4_linear_9_79145)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_79145'%20x1='54.6449'%20y1='-42.7824'%20x2='85.1389'%20y2='87.607'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_79145'%20x1='23.9142'%20y1='28.2618'%20x2='-25.8544'%20y2='32.7577'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_79145'%20x1='76.5939'%20y1='-11.7304'%20x2='26.8253'%20y2='-7.23448'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_79145'%20x1='107.325'%20y1='-82.7745'%20x2='137.819'%20y2='47.6148'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_79145'%20x1='76.5939'%20y1='-11.7304'%20x2='26.8253'%20y2='-7.23447'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_79145'%3e%3crect%20width='128'%20height='107'%20fill='white'%20transform='matrix(1%200%200%20-1%200%20107)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
