$(function(){
    $('.bxslider').bxSlider({
  mode: 'fade',
      captions: true,
        slideWidth: 1200
      });
    }); 
  
  var posts = [
      {
          title: 'Into the wild',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pulvinar turpis. Fusce malesuada, metus accumsan dignissim fringilla, leo orci pulvinar quam, et porttitor nunc sem sed elit. Suspendisse id vehicula risus, a rhoncus lorem. Vestibulum accumsan aliquam pretium. Quisque sed lectus ac augue tempus pellentesque eget vel lacus. Praesent nec sollicitudin nibh, vitae condimentum est. Suspendisse condimentum consequat imperdiet. Nunc ac purus dictum, tincidunt sem eget, dictum enim. Duis eget eros vitae nibh vehicula mollis. Aenean arcu velit, elementum a accumsan quis, dignissim in elit. Mauris vehicula purus quam, vitae auctor nunc consectetur in. Sed metus lorem, pulvinar id sodales luctus, posuere a nulla. Sed molestie nisl eget diam pharetra dictum. Curabitur placerat mollis accumsan.',
          date: new Date(),
      },
      {
        title: 'The pack survives',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pulvinar turpis. Fusce malesuada, metus accumsan dignissim fringilla, leo orci pulvinar quam, et porttitor nunc sem sed elit. Suspendisse id vehicula risus, a rhoncus lorem. Vestibulum accumsan aliquam pretium. Quisque sed lectus ac augue tempus pellentesque eget vel lacus. Praesent nec sollicitudin nibh, vitae condimentum est. Suspendisse condimentum consequat imperdiet. Nunc ac purus dictum, tincidunt sem eget, dictum enim. Duis eget eros vitae nibh vehicula mollis. Aenean arcu velit, elementum a accumsan quis, dignissim in elit. Mauris vehicula purus quam, vitae auctor nunc consectetur in. Sed metus lorem, pulvinar id sodales luctus, posuere a nulla. Sed molestie nisl eget diam pharetra dictum. Curabitur placerat mollis accumsan.',
        date: new Date(),
    },
    {
        title: 'Mock article 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pulvinar turpis. Fusce malesuada, metus accumsan dignissim fringilla, leo orci pulvinar quam, et porttitor nunc sem sed elit. Suspendisse id vehicula risus, a rhoncus lorem. Vestibulum accumsan aliquam pretium. Quisque sed lectus ac augue tempus pellentesque eget vel lacus. Praesent nec sollicitudin nibh, vitae condimentum est. Suspendisse condimentum consequat imperdiet. Nunc ac purus dictum, tincidunt sem eget, dictum enim. Duis eget eros vitae nibh vehicula mollis. Aenean arcu velit, elementum a accumsan quis, dignissim in elit. Mauris vehicula purus quam, vitae auctor nunc consectetur in. Sed metus lorem, pulvinar id sodales luctus, posuere a nulla. Sed molestie nisl eget diam pharetra dictum. Curabitur placerat mollis accumsan.',
        date: new Date(),
    },
    {
        title: 'Mock article 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pulvinar turpis. Fusce malesuada, metus accumsan dignissim fringilla, leo orci pulvinar quam, et porttitor nunc sem sed elit. Suspendisse id vehicula risus, a rhoncus lorem. Vestibulum accumsan aliquam pretium. Quisque sed lectus ac augue tempus pellentesque eget vel lacus. Praesent nec sollicitudin nibh, vitae condimentum est. Suspendisse condimentum consequat imperdiet. Nunc ac purus dictum, tincidunt sem eget, dictum enim. Duis eget eros vitae nibh vehicula mollis. Aenean arcu velit, elementum a accumsan quis, dignissim in elit. Mauris vehicula purus quam, vitae auctor nunc consectetur in. Sed metus lorem, pulvinar id sodales luctus, posuere a nulla. Sed molestie nisl eget diam pharetra dictum. Curabitur placerat mollis accumsan.',
        date: new Date(),
    },
    {
        title: 'Mock article 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu pulvinar turpis. Fusce malesuada, metus accumsan dignissim fringilla, leo orci pulvinar quam, et porttitor nunc sem sed elit. Suspendisse id vehicula risus, a rhoncus lorem. Vestibulum accumsan aliquam pretium. Quisque sed lectus ac augue tempus pellentesque eget vel lacus. Praesent nec sollicitudin nibh, vitae condimentum est. Suspendisse condimentum consequat imperdiet. Nunc ac purus dictum, tincidunt sem eget, dictum enim. Duis eget eros vitae nibh vehicula mollis. Aenean arcu velit, elementum a accumsan quis, dignissim in elit. Mauris vehicula purus quam, vitae auctor nunc consectetur in. Sed metus lorem, pulvinar id sodales luctus, posuere a nulla. Sed molestie nisl eget diam pharetra dictum. Curabitur placerat mollis accumsan.',
        date: new Date(),
    },
  ];

  posts.forEach((item, index) => {
      var post = `
      <article class="post">
          <h2>${item.title}</h2>
          <span>${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        $("#posts").append(post)
  });
 