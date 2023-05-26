import { ArticleAPI } from "@/script/@type/article/article";
import {
  ArticleFooter,
  ArticleForm,
  ArticleTitle,
} from "@/script/@type/article/data";
import styled from "@emotion/styled";
import React, { useState } from "react";
import HeightAlign from "./height-align";
import WidthAlign from "./width-align";
import ImageCard from "./Image-card";
import { FONT } from "@/script/@type/article/variable";

const page = () => {
  const [title, setTitle] = useState(new ArticleTitle());
  const [footer, setFooter] = useState(new ArticleFooter());
  const [file, setFile] = useState<File | undefined>();
  const [imageSrc, setImageSrc] = useState<string | undefined>();

  const obSubmit = () => {
    const articleForm: ArticleForm = {
      title,
      footer,
      file,
    };
    ArticleAPI.create(articleForm);
  };

  const handleTitleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setTitle({ ...title, [name]: value });
  };

  const handleFooterChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFooter({ ...footer, [name]: value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files) return;
    const file = files[0]; // 파일은 여러개가 들어올 수 있기 때문에 배열
    const reader = new FileReader(); // 파일을 읽어오는 객체
    reader.readAsDataURL(file); // 파일을 읽어오는 메서드
    setFile(files[0]);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImageSrc(reader.result as string);
        resolve();
      };
    });
  };

  return (
    <FlexBox>
      <Wrapper>
        <div className="form">
          <TitleInput
            value={title.content}
            placeholder="제목을 입력해주세요."
            onChange={handleTitleChange}
            name="content"
          />
          <div className="separation" />

          <div className="flex_box">
            <ColorInput
              value={title.color}
              onChange={handleTitleChange}
              type="color"
              id="color"
              name="color"
            />
            <div className="color_label">{title.color.split("#")[1]}</div>

            <Select
              onChange={handleTitleChange}
              value={title.size}
              id="size"
              name="size"
            >
              {FONT.TITLE_SIZE_LIST.map((fontSize, index) => (
                <option key={index} value={fontSize}>
                  {fontSize}
                </option>
              ))}
            </Select>

            <Select
              onChange={handleTitleChange}
              value={title.fontFamily}
              id="fontFamily"
              name="fontFamily"
            >
              {FONT.FAMILY_LIST.map((fontFamily, index) => (
                <option key={index} value={fontFamily}>
                  {fontFamily}
                </option>
              ))}
            </Select>
            <Select
              onChange={handleTitleChange}
              value={title.weight}
              id="weight"
              name="weight"
            >
              {FONT.WEIGHT_LIST.map((weight, index) => (
                <option key={index} value={weight}>
                  {weight}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex_box">
            <WidthAlign title={title} setTitle={setTitle} />
            <HeightAlign title={title} setTitle={setTitle} />
          </div>
          <FooterInput
            value={footer.content}
            placeholder="내용을 입력해주세요."
            onChange={handleFooterChange}
            id="content"
            name="content"
          />
          <div className="separation" />
          <div className="flex_box">
            <ColorInput
              value={footer.color}
              onChange={handleFooterChange}
              type="color"
              id="color"
              name="color"
            />
            <div className="color_label">{footer.color.split("#")[1]}</div>
            <Select
              onChange={handleFooterChange}
              value={footer.size}
              id="size"
              name="size"
            >
              {FONT.FOOTER_SIZE_LIST.map((fontSize, index) => (
                <option key={index} value={fontSize}>
                  {fontSize}
                </option>
              ))}
            </Select>
            <Select
              onChange={handleFooterChange}
              value={footer.fontFamily}
              id="fontFamily"
              name="fontFamily"
            >
              {FONT.FAMILY_LIST.map((fontFamily, index) => (
                <option key={index} value={fontFamily}>
                  {fontFamily}
                </option>
              ))}
            </Select>
            <Select
              onChange={handleFooterChange}
              value={footer.weight}
              id="weight"
              name="weight"
            >
              {FONT.WEIGHT_LIST.map((weight, index) => (
                <option key={index} value={weight}>
                  {weight}
                </option>
              ))}
            </Select>
            <label htmlFor="background">배경</label>
            <input
              checked={footer.background}
              onChange={() =>
                setFooter({ ...footer, background: !footer.background })
              }
              type="checkbox"
              id="background"
              name="background"
            />
          </div>
          <FileInput>
            <label htmlFor="file">
              <div className="btn-upload">사진 등록</div>
            </label>
            <input onChange={handleFile} type="file" id="file" name="file" />
          </FileInput>
          <button onClick={() => obSubmit()}>등록</button>
        </div>
      </Wrapper>
      <ImgPreviewWrapper>
        <ImageCard fileUrl={imageSrc} title={title} footer={footer} />
      </ImgPreviewWrapper>
    </FlexBox>
  );
};

export default page;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #1a4524;
  align-items: center;
`;

const TitleInput = styled.input`
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  padding-left: 15px;
  background-color: #fff;

  &:focus {
    outline: none;
    background-color: #f9f9f9;
  }

  &::placeholder {
    font-size: 20px;
    font-weight: bold;
    color: #c1c1c1;
  }
`;
const FooterInput = styled.textarea`
  height: 100px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  padding: 15px;
  background-color: #f5f5f5;
  resize: none;
  &:focus {
    outline: none;
    background-color: #f9f9f9;
  }

  &::placeholder {
    font-size: 20px;
    font-weight: bold;
    color: #c1c1c1;
  }
`;
const ColorInput = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
    background-color: #f9f9f9;
  }
`;
const Select = styled.select`
  min-width: 60px;
  padding: 0 10px;
  height: 30px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const Wrapper = styled.article`
  width: 45%;
  height: 90%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  overflow-y: auto;
  .separation {
    margin: 20px 0;
    width: 200px;
    height: 10px;
    background-color: #1a4524;
  }
  .input_box {
    display: flex;
  }
  .flex_box {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    .color_label {
      width: 80px;
      font-size: 18px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input_box {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    label {
      font-size: 14px;
      font-weight: bold;
    }

    button {
      padding: 5px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
      &:hover {
        background-color: #ddd;
        transition: background-color 0.3s;
      }
    }
  }
`;

const ImgPreviewWrapper = styled.div`
  width: 45%;
  height: 90%;
  margin: 0 auto;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const FileInput = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  input[type="file"] {
    display: none;
  }
  .btn-upload {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
      transition: background-color 0.3s;
    }
  }
`;
