import PrismicDom from 'prismic-dom';

const richText = (text) => PrismicDom.RichText.asHtml(text);
const plainText = (text = '') => text.length ? PrismicDom.RichText.asText(text) : null;
const image = (image) => ({
  url: image.url,
  alt: image.alt
});
const linkObj = (link) => {
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

const yogaLessons = (lessons) => {
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

export const formatData =
  (data) => data.map((item) => {
    let obj = { slice_type: item.slice_type };

    switch(item.slice_type) {
      case 'about_section':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
            text: richText(item.primary.text),
            image: image(item.primary.image)
          }
        };
        break;
      case 'yoga':
        obj = {
          ...obj,
          items: yogaLessons(item.items),
          data: {
            privateText: richText(item.primary.private_text),
            title: plainText(item.primary.title)
          }
        };
        break;
      case 'testimonials':
        obj = {
          ...obj,
          items: item.items.map(testimonial => ({
            text: plainText(testimonial.text),
            name: plainText(testimonial.name)
          })),
          data: {
            title: plainText(item.primary.title),
            image: image(item.primary.image),
          }
        };
        break;
      case 'meditation':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
            text: richText(item.primary.text),
            image: image(item.primary.image),
            quote: plainText(item.primary.quote),
            quote_by: plainText(item.primary.quote_by)
          }
        };
        break;
      case 'resource':
        obj = {
          ...obj,
          items: item.items.map(resource => ({
            title: plainText(resource.title),
            url: plainText(resource.url),
            description: plainText(resource.description),
            image: image(resource.image)
          })),
          data: {
            title: plainText(item.primary.title)
          }
        };
        break;
      case 'articles':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
          },
          items: item.items.map(article => ({
            title: plainText(article.title),
            url: plainText(article.url),
            description: plainText(article.description)
          }))
        };
        break;
      case 'videos':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
          },
          items: item.items.map(video => ({
            title: plainText(video.title),
            video_url: plainText(video.video_url),
            description: plainText(video.description)
          }))
        };
        break;
      case 'events':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
          },
          items: item.items.map(event => ({
            title: plainText(event.title),
            description: plainText(event.description),
            image: image(event.image)
          }))
        };
        break;
      case 'movies':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
            text: plainText(item.primary.text),
            backgroundImage: image(item.primary.image),
          },
          items: item.items.map(movie => ({
            title: plainText(movie.title),
            url: plainText(movie.url),
            year: plainText(movie.year)
          }))
        };
        break;
      case 'contact':
        obj = {
          ...obj,
          data: {
            title: plainText(item.primary.title),
            text: plainText(item.primary.text),
            buttonText: plainText(item.primary.button_text)
          }
        };
        break;
      default:
        break;
    }
    return obj;
  });
