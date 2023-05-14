import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import iframe from "iframe";
const index = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const theme = useTheme();
  const [github, setGithub] = useState();
  const handleChange = (event) => {
    setGithub(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <meta
          name="description"
          content="This is Senior Project page of my website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main w-full pt-16 pb-48 md:pb-40 md:pt-12 ">
        <div className="md:flex md:flex-col md:gap-5 pt-5">
          <div className="flex flex-col xl:flex-row justify-end items-center">
          <h5 className="flex justify-center items-center text-center text-xl pb-5 break-normal  text-ellipsis  font-semibold flex-wrap md:hidden">
              Physical Therapy Clnic Service Management Platform
            </h5>
            <div className="grid grid-cols-1 justify-center md:grid-cols-4 items-start gap-3 lg:flex lg:flex-row">
              <Link href="/projects">
                <button
                  className="bg-gray-400 w-[250px] md:w-fit md:px-6 py-[10px] text-[16px] border-b-2 border-gray-600/30 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1  "
                >
                  Back
                </button>
              </Link>
              <div className="hover:-translate-y-1 ">
                <FormControl
                  sx={{
                    minWidth: 250,
                    height: 43,
                    borderRadius: 50,
                    backgroundColor: "#D7ECB0",
                    textAlign: "center",
                    justifyItems: "center",
                    borderColor: "#909E68",
                    boxShadow: 4,
                    "@media only screen and (min-width: 768px)": {
                      minWidth: 115,
                    },
                  }}
                  size="small"
                >
                  <InputLabel
                    id="gitHubSelectLabel"
                    sx={{
                      fontSize: 18,
                      fontFamily: "Merriwether",
                      textAlign: "center",
                      fontWeight: "semi-bold",
                      justifyItems: "center",
                      color: "black",
                      "&.MuiInputLabel-root.Mui-focused": {
                        color: "black",
                      },
                    }}
                  >
                    GitHub
                  </InputLabel>
                  <Select
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                          borderRadius: 50,
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: 0,
                          borderRadius: 50,
                          borderColor: "#909E68",
                          color: "#D7ECB0",
                          "& .MuiLabel": {
                            color: "#D7ECB0",
                          },
                        },
                      "&.MuiLabel .Mui-focused": {
                        color: "black",
                      },
                    }}
                    labelId="gitHubSelectLabel"
                    id="select"
                    label="GitHub"
                    value={github}
                    onChange={handleChange}
                  >
                    <MenuItem
                      value="Clinic App"
                      sx={{
                        backgroundColor: "#D7ECB0",
                        "&.MuiMenuItem-root:hover": {
                          backgroundColor: "#D7ECB0",
                        },
                      }}
                    >
                      <a
                        href="https://github.com/yanisapths/daycare-portal"
                        target="_blank"
                      >
                        Clinc Management App
                      </a>
                    </MenuItem>
                    <MenuItem
                      value="Customer App"
                      sx={{
                        "&.MuiMenuItem-root:hover": {
                          backgroundColor: "#D7ECB0",
                        },
                      }}
                    >
                      <a
                        href="https://github.com/yanisapths/project-customer"
                        target="_blank"
                      >
                        Customer App
                      </a>
                    </MenuItem>
                    <MenuItem
                      value="Backend Repository"
                      sx={{
                        "&.MuiMenuItem-root:hover": {
                          backgroundColor: "#D7ECB0",
                        },
                      }}
                    >
                      <a
                        href="https://github.com/yanisapths/hyp-api"
                        target="_blank"
                      >
                        Backend Repository
                      </a>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <a
                href="/files/poster_physical_therapy_clinic_service_platform.pdf"
                target="_blank"
              >
                <button className="btnLink w-[250px] md:w-fit md:px-6 py-[11px] text-[16px] ">
                  Poster
                </button>
              </a>
              <a
                href="/files/report_physical_therapy_clinic_service_platform.pdf"
                target="_blank"
              >
                {" "}
                <button className="btnLink  w-[250px] md:w-fit md:px-6 py-[11px] text-[16px]">
                  Report
                </button>
              </a>
              <a
                href="https://www.canva.com/design/DAFOyTPwJ7A/IeglkjZ8lCY43Ds3Ee2lkA/edit?utm_content=DAFOyTPwJ7A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className="md:hidden"
                target="_blank"
              >
                <button className="btnLink w-[250px] md:w-fit md:px-4 py-[11px] text-sm">
                  Presentation
                </button>
              </a>
            </div>
          </div>
          <div>
          <h5 className="hidden md:flex md:justify-center md:text-center md:text-xl md:pb-5 lg:text-2xl font-semibold flex-wrap">
              Physical Therapy Clnic Service Management Platform
            </h5>
          </div>
          <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:pt-5 lg:pt-0 ">
            <iframe
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFOyTPwJ7A&#x2F;IeglkjZ8lCY43Ds3Ee2lkA&#x2F;view?embed"
              allowFullScreen="allowFullScreen"
              allow="fullScreen"
              className="md:w-[700px] md:h-[500px] lg:w-[750px] lg:h-[600px] xl:w-[900px] rounded-3xl"
            ></iframe>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-4 pt-10 md:flex md:flex-row  md:pt-2">
              <a href="https://o-live.vercel.app/" target="_blank">
                <button className="bg-yellow  px-4 py-2 text-base shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1  lg:text-[16px] ">
                  Visit Customer App
                </button>
              </a>
              <a href="https://daycare-portal.vercel.app/" target="_blank">
                <button className="bg-yellow px-4 py-2 text-[18px] shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1 lg:text-[16px]">
                  Visit Clinic Management App{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
