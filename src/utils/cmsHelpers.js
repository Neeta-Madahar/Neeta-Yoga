import PrismicDom from 'prismic-dom';

const richText = (text) => PrismicDom.RichText.asHtml(text);
const plainText = (text) => text[0].text;
const image = (image) => image;


const yogaLessons = (lessons) => {
  let daysObject = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [] };
  lessons.forEach((lesson) => {
    daysObject[lesson.day.toLowerCase()].push(lesson.lesson);
  });
  return daysObject;
}

export const formatData =
  (data) => data.map((item) => {
    let obj;
    switch(item.slice_type) {
      case 'about_section':
        obj = {
          slice_type: item.slice_type,
          data: {
            title: plainText(item.primary.title),
            text: richText(item.primary.text),
            image: image(item.primary.image)
          }
        }
        break;
      case 'yoga':
        obj = {
          slice_type: item.slice_type,
          data: {
            privateText: plainText(item.primary.private_text),
            lessons: yogaLessons(item.items),
          }
        }
        break;
    }
    return obj;
  });
