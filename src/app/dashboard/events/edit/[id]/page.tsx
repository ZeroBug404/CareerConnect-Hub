"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "@/redux/api/eventApi";
import { Button, Col, Row, TimePicker, message } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";

const UpdateEventPage = ({ params }: any) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const { id } = params;

  const { data, isLoading } = useGetSingleEventQuery(id);
  console.log(data?.data);

  const [updateEvent] = useUpdateEventMutation();

  const format = "HH:mm";

  const onSubmit = async (eventData: any) => {
    // console.log("Event Data:", eventData);
    const options = {
      name: eventData.event,
      image: eventData.image,
      location: eventData.location,
      description: eventData.description,
      date: eventData.date.format("YYYY-MM-DD"),
      speakers: [
        {
          title: eventData.title,
          name: eventData.nameOfSpeaker,
          bio: eventData.bio,
        },
      ],
      agenda: [
        {
          event: eventData.agenda,
          time: value?.format("HH:mm"),
        },
      ],
    };
    message.loading("Updating...");
    // console.log(options);
    updateEvent(options);

    message.success("Event Published Successfully!");
  };

  const createdTime =
    data?.data?.agenda.map((item: any) => {
      return item.time;
    }) || "";

  const onChange = (time: Dayjs) => {
    if (time) {
      setValue(time);
    } else {
      setValue(createdTime);
    }
  };

  const defaultValues = {
    event: data?.data?.name || "",
    location: data?.data?.location || "",
    title:
      data?.data?.speakers.map((speaker: any) => {
        return speaker.title;
      }) || "",
    image: data?.data?.image || "",
    description: data?.data?.description || "",
    // date: data?.data?.date || "",
    nameOfSpeaker:
      data?.data?.speakers.map((speaker: any) => {
        return speaker.name;
      }) || "",
    bio:
      data?.data?.speakers.map((speaker: any) => {
        return speaker.bio;
      }) || "",
    agenda:
      data?.data?.agenda.map((item: any) => {
        return item.event;
      }) || "",
    time:
      data?.data?.agenda.map((item: any) => {
        return item.time;
      }) || "",
  };

  return (
    <>
      <CareerBreadCrumb
        items={[
          {
            label: "View Events",
            link: "/dashboard/events",
          },
        ]}
      />
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <h2>Update Event</h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Event Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="event"
                  type="text"
                  size="large"
                  label="Name of Event"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="location"
                  type="text"
                  size="large"
                  label="Location"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="image"
                  type="text"
                  size="large"
                  label="URL of Image"
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Speaker Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="nameOfSpeaker"
                  type="text"
                  size="large"
                  label="Name of Speaker"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput name="bio" type="text" size="large" label="Bio" />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Agenda Information
            </p>
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              //   justify={"center"}
              //   align={"middle"}
            >
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormInput
                  name="agenda"
                  type="text"
                  size="large"
                  label="Agenda Name"
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <p>Time</p>
                <TimePicker
                  // name="time"
                  size="large"
                  style={{
                    width: "100%",
                    margin: "5px 0",
                  }}
                  defaultValue={createdTime}
                  format={format}
                  value={value}
                  onChange={(time: Dayjs | null) => onChange(time || dayjs())}
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Others
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormTextArea
                  name="description"
                  label="Event Description"
                  rows={8}
                  cols={8}
                />
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                style={{
                  margin: "5px 0",
                }}
              >
                <FormDatePicker name="date" label="Date & Time" />
              </Col>
            </Row>
          </div>

          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Update Event
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateEventPage;
