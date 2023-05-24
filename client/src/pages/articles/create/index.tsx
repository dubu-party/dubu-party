import { ArticleAPI } from "@/script/@type/article/article";
import {
  ArticleCreateRequest,
  FONT_FAMILY,
  FOOTER_FONT_SIZE,
  HEIGHT_SORT,
  TITLE_FONT_SIZE,
} from "@/script/@type/article/data";
import styled from "@emotion/styled";
import React, { useState } from "react";

const page = () => {
  const [articleForm, setArticleForm] = useState(new ArticleCreateRequest());
  const [imageSrc, setImageSrc] = useState<any>(null);

  const obSubmit = () => ArticleAPI.create(articleForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setArticleForm({ ...articleForm, [name]: value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files) return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    setArticleForm({ ...articleForm, [name]: files[0] });

    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImageSrc(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <>
      <Wrapper>
        <div className="form">
          <>
            <h1>제목</h1>
            <div className="input_box">
              <label htmlFor="title">제목</label>
              <input
                value={articleForm.title.content}
                onChange={handleChange}
                type="text"
                id="title"
                name="title"
              />
            </div>

            <div className="font_box">
              <div className="input_box">
                <label htmlFor="fontSize">글자 크기</label>
                <select
                  onChange={handleChange}
                  value={articleForm.title.size}
                  id="fontSize"
                  name="fontSize"
                >
                  {TITLE_FONT_SIZE.map((fontSize, index) => (
                    <option key={index} value={fontSize}>
                      {fontSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_box">
                <label htmlFor="fontFamily">글꼴</label>
                <select
                  onChange={handleChange}
                  value={articleForm.title.fontFamily}
                  id="fontFamily"
                  name="fontFamily"
                >
                  {FONT_FAMILY.map((fontFamily, index) => (
                    <option key={index} value={fontFamily}>
                      {fontFamily}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_box">
                <label htmlFor="fontColor">글자 색상</label>
                <input
                  value={articleForm.title.color}
                  onChange={handleChange}
                  type="color"
                  id="fontColor"
                  name="fontColor"
                />
              </div>
            </div>

            <div className="input_box">
              <label htmlFor="heightAlign">세로 정렬</label>
              <select
                onChange={handleChange}
                value={articleForm.title.heightSort}
                id="heightAlign"
                name="heightAlign"
              >
                {HEIGHT_SORT.map((heightAlign, index) => (
                  <option key={index} value={heightAlign}>
                    {heightAlign}
                  </option>
                ))}
              </select>
            </div>
          </>
          <>
            <h1>내용</h1>
            <div className="input_box">
              <label htmlFor="content">내용</label>
              <textarea
                onChange={handleChange}
                value={articleForm.footer.content}
                id="content"
                name="content"
              />
            </div>
            <div className="font_box">
              <div className="input_box">
                <label htmlFor="fontSize">글자 크기</label>
                <select
                  onChange={handleChange}
                  value={articleForm.footer.size}
                  id="fontSize"
                  name="fontSize"
                >
                  {FOOTER_FONT_SIZE.map((fontSize, index) => (
                    <option key={index} value={fontSize}>
                      {fontSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_box">
                <label htmlFor="fontFamily">글꼴</label>
                <select
                  onChange={handleChange}
                  value={articleForm.footer.fontFamily}
                  id="fontFamily"
                  name="fontFamily"
                >
                  {FONT_FAMILY.map((fontFamily, index) => (
                    <option key={index} value={fontFamily}>
                      {fontFamily}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_box">
                <label htmlFor="fontColor">글자 색상</label>
                <input
                  value={articleForm.footer.color}
                  onChange={handleChange}
                  type="color"
                  id="fontColor"
                  name="fontColor"
                />
              </div>
            </div>
          </>
          <div className="input_box">
            <label htmlFor="file">파일</label>
            <input onChange={handleFile} type="file" id="file" name="file" />
          </div>
          <button onClick={() => obSubmit()}>등록</button>
        </div>
      </Wrapper>
      <ImgPreviewWrapper>
        <img src={imageSrc} alt={imageSrc} />
      </ImgPreviewWrapper>
    </>
  );
};

export default page;

const Wrapper = styled.article`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;

  .font_box {
    display: flex;
    justify-content: space-between;
    gap: 10px;
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
  input,
  textarea,
  select {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

const ImgPreviewWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;

  img {
    width: 100%;
  }
`;
