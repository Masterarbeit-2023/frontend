import { Button, Form, Input, Slider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SliderMarks } from "antd/es/slider";
import { useState } from "react";
import Rating from "../../models/Rating";

const RatingForm = () => {
  const marks: SliderMarks = {
    0: "0",
    10: "10",
  };
  const [all, setAll] = useState(0);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const rating = new Rating(
        all,
        values["location"],
        values["room"],
        values["service"],
        values["pricePerformanceRatio"],
        values["comfort"],
        values["equipment"],
        values["building"],
        values["breakfast"],
        values["food"],
        values["cleanliness"],
        values["description"],
        values["name"],
        ""
    );
    console.log(rating)
    fetch(`http://localhost:8080/rating`,{
        // learn more about this API here: https://graphql-pokemon2.vercel.app/
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(rating),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
  };

  const onChange = (value: any, values: any) => {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < values.length; i++) {
      if (i != 0 && i != 1 && i != 12) {
        sum = sum + values[i].value;
        counter++;
      }
    }
    setAll(sum / counter);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onFieldsChange={onChange}
        autoComplete="off"
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          label="Beschreibung"
          name="description"
          rules={[
            { required: true, message: "Beschreibung ist ein Pflichtfeld!" },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item label="Lage" name="location" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Zimmer" name="room" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Service" name="service" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Frühstück" name="breakfast" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Essen/Trinken" name="food" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Komfort" name="comfort" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Ausstattung" name="equipment" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Gebäude" name="building" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item
          label="Preis-Leistungs-Verhältnis"
          name="pricePerformanceRatio"
          initialValue={0}
        >
        <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Sauberkeit" name="cleanliness" initialValue={0}>
          <Slider max={10} min={0} marks={marks} />
        </Form.Item>
        <Form.Item label="Insgesamt" name="all">
          <p className="text-3xl font-bold align-middle">{all}</p>

        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RatingForm;
