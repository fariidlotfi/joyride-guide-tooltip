import { useState } from "react";
import Joyride from "react-joyride";
import "./app.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [steps] = useState([
    {
      content: <h1>به راهنمایی نیاز دارید؟</h1>,
      placement: "center",
      target: "body",
    },
    {
      target: ".step-1",
      content: "توضیحات اضافی برای هر وضعیت",
    },
    {
      target: ".step-2",
      content: "توضیحات اضافی برای هر وضعیت",
    },
    {
      target: ".step-3",
      content: "توضیحات اضافی برای هر وضعیت",
    },
    {
      target: ".step-4",
      content: "توضیحات اضافی برای هر وضعیت",
    },
  ]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>تغییر وضعیت</button>
      <div className="step-1">
        <h1>راهنمای یک</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
      </div>
      <div className="step-2">
        <h1>راهنمای دو</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
      </div>
      <div className="step-3">
        <h1>راهنمای سه</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
      </div>
      <div className="step-4">
        <h1>راهنمای چهار</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
      </div>
      <Joyride
        steps={steps}
        run={toggle}
        continuous
        showSkipButton
        showProgress
        scrollToFirstStep
        locale={{
          back: "قبلی",
          skip: "رد کردن",
          next: "بعدی",
          close: "بستن",
          last: "آخرین",
          open: "باز کردن",
        }}
      />
    </>
  );
}

export default App;
