import PrismicDom from 'prismic-dom';

export const richText = (text) => PrismicDom.RichText.asHtml(text);
export const plainText = (text = '') => text.length ? PrismicDom.RichText.asText(text) : null;
export const image = (image) => {
  return {
    url: image.url,
    alt: image.alt
  }
};

const linkObj = (link = {}) => {
  if (!link.url && !link.slug) return null;

  if (link.link_type === 'Web') {
    const TARGET_BLANK = link.target ? {
      target: link.target,
      rel: 'noopener noreferrer',
    } : {};

    return {
      ...TARGET_BLANK,
      url: link.url,
    };
  }

  return {
    url: `/${link.slug}`
  }
};

const formatYogaData = (obj) => {
  let returnObj = [];

  Object.keys(obj).forEach((day) => {
    let dayObject = { day, lessons: [] };

    obj[day].forEach((lessonObj) => {
      const {
        lesson,
        time,
        location,
        location_link
      } = lessonObj;

      dayObject.lessons.push({
        lesson,
        time,
        location,
        location_link
      });
    });

    returnObj.push(dayObject);
  });

  return returnObj;
};

export const yogaLessons = (lessons) => {
  let daysObject = {};

  for(let i = 0; i < lessons.length; i++) {
    if(!daysObject[lessons[i].day.toLowerCase()]) {
      daysObject[lessons[i].day.toLowerCase()] = [];
    }

    daysObject[lessons[i].day.toLowerCase()].push({
      lesson: plainText(lessons[i].lesson),
      time: plainText(lessons[i].time),
      location: plainText(lessons[i].location),
      location_link: linkObj(lessons[i].location_link)
    });
  }

  return formatYogaData(daysObject);
};
