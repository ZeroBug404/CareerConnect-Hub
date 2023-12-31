"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import CareerBreadCrumb from "@/components/ui/CareerBreadCrumb";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { IBlogData } from "@/types";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const [addBlog] = useAddBlogMutation();
  const router = useRouter();

  const onSubmit = async (data: IBlogData) => {
    message.loading("Adding...");
    try {
      await addBlog(data);
      message.success("Blog added successfully");
      router.push("/dashboard/blog");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <CareerBreadCrumb
          items={[
            {
              label: "View Blog",
              link: "/dashboard/blog",
            },
          ]}
        />
        <Form submitHandler={onSubmit}>
          <h2
            style={{
              color: "#1F2B6C",
              textAlign: "center",
            }}
          >
            Publish a blog
          </h2>
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
              Blog Information
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
                  size="small"
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
                  name="author"
                  type="text"
                  size="small"
                  label="Author"
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
                  name="publishDate"
                  type="date"
                  size="small"
                  label="Publish Date"
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
                  name="img"
                  type="text"
                  size="small"
                  label="Image Link"
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
                <FormTextArea name="content" label="Content" rows={4} />
              </Col>
            </Row>
          </div>
          <div style={{ margin: "10px 0" }}>
            <Button type="primary" htmlType="submit" size="large">
              Add Blog
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateBlog;
