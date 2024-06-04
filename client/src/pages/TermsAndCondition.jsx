import React, { useEffect } from "react";
import style from "../css/TermsAndConditions.module.css";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.heading}>Terms and Conditions</h1>
        <p className={style.paragraph}>
          <h2 className={style.heading}>RETURNS</h2>
          Traincape Technology has a 7-day return policy. That means you have 7
          days after receiving your item to request a return. To be eligible for
          a return, your item must be in the same condition that you received
          it, unworn or unused, with tags, and in its original packaging. You
          must also have the receipt or proof of purchase. To start your return
          request, you can contact us at Sales@traincapetech.info. Please note
          that returns will need to be sent to the following address: 118/C ,
          Khandolia Plaza , New Delhi -110045, New Delhi , Delhi, 110045 If your
          return is accepted, we'll send you instructions on how and where to
          send your package. Items sent to us without first requesting a return
          will not be accepted. Please note that if your country of residence is
          not United States , INDIA, shipping may take longer than expected.
          Please contact us for any return questions at Sales@traincapetech.info
        </p>
        <h2 className={style.heading}>Damages and Issues</h2>
        <p className={style.paragraph}>
          Please inspect your order upon receipt and contact us immediately if
          the item is defective, damaged, or incorrect, so that we may evaluate
          the issue and find a resolution. Certain types of items cannot be
          returned, like perishable goods (such as food), custom products (such
          as personalized goods), and personal care goods (such as beauty
          products). We also do not accept returns for hazardous materials,
          flammable liquids, or gases. Please get in touch if you have questions
          or concerns about your specific item. Unfortunately, we cannot accept
          returns on gift cards or sale items.
        </p>
        <h2 className={style.heading}>Exchanges</h2>
        <p className={style.paragraph}>
          The fastest way to ensure you get what you want is to return the item
          you have, and once the return is accepted, make a separate purchase
          for the new item.
        </p>
        <h2 className={style.heading}>European 3 Day Cooling Off Period</h2>
        <p className={style.paragraph}>
          Notwithstanding the above, if your merchandise was shipped to the
          European Union, you have the right to cancel or return your order
          within 3 days for any reason and without justification. Your item must
          be in the same condition that you received it, unworn or unused, with
          tags, and in its original packaging. You'll also need the receipt or
          proof of purchase.
        </p>
        <h2 className={style.heading}>Refunds</h2>
        <p className={style.paragraph}>
          We will notify you once we've received and inspected your return to
          let you know if the refund was approved or not. If approved, you'll be
          automatically refunded on your original payment method within 10
          business days. Please remember it can take some time for your bank or
          credit card company to process and post the refund too. If more than
          15 business days have passed since we've approved your return, please
          contact us at Sales@traincapetech.info. Visit Traincapetech.in for
          more information.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
