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
import iframe from 'iframe';
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
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className="main flex flex-col gap-5 relative pt-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/oliveLogo.png"
              width="70"
              height="70"
              className="rounded-full"
            />
            <p className="text-2xl font-semibold flex-wrap text-green">
              
               Physical Therapy Clnic Service Platform
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/projects">
              <button
                className="bg-gray-400 px-4 py-[13px] text-xs border-b-2 border-gray-600/60 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1"
              >
                Back
              </button>
            </Link>
            <div className="hover:-translate-y-1 ">
              <FormControl
                sx={{
                  minWidth: 95,
                  borderRadius: 50,
                  backgroundColor: "#D7ECB0",
                  textAlign: "center",
                  justifyItems: "center",
                  borderColor: "#909E68",
                  boxShadow: 4,
                }}
                size="small"
              >
                <InputLabel
                  id="gitHubSelectLabel"
                  sx={{
                    fontSize: 17,
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
                  <MenuItem value="Customer App"
                   sx={{
                    
                    "&.MuiMenuItem-root:hover": {
                      backgroundColor: "#D7ECB0",
                      
                    },
                  }}>
                    <a
                      href="https://github.com/yanisapths/project-customer"
                      target="_blank"
                    >
                      Customer App
                    </a>
                  </MenuItem>
                  <MenuItem value="Backend Repository"
                   sx={{
                    
                    "&.MuiMenuItem-root:hover": {
                      backgroundColor: "#D7ECB0",
                      
                    },
                  }}>
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

            <a href="/files/poster_physical_therapy_clinic_service_platform.pdf" target="_blank">
              <button className="btnLink py-[13px]">Poster</button>
            </a>
            <a href="/files/report_physical_therapy_clinic_service_platform.pdf" target="_blank">
              {" "}
              <button className="btnLink py-[13px]">Report</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
        <iframe src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFOyTPwJ7A&#x2F;IeglkjZ8lCY43Ds3Ee2lkA&#x2F;view?embed" allowFullScreen="allowFullScreen" allow="fullScreen" className='w-[1100px] h-[500px] rounded-3xl'></iframe>
        </div>
        <div>
          <div className="flex justify-center items-center gap-4 pt-2">
            <a href="https://o-live.vercel.app/" target="_blank">
              <button className="bg-yellow px-4 py-2 text-xs shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1">
                Visit Customer App
              </button>
            </a>
            <a href="https://daycare-portal.vercel.app/" target="_blank">
              <button className="bg-yellow px-4 py-2 text-xs shadow-xl hover:scale-105 rounded-full hover:bg-black hover:text-yellow hover:-translate-y-1">
                Visit Clinic Management App{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
