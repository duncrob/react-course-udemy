import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I accept</Button>
    </div>
  )

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sapien vel mi rhoncus porttitor. Proin sit amet nisi finibus, cursus dui in, accumsan sapien. Sed molestie fringilla ipsum ac viverra. Praesent sit amet risus vestibulum, mattis tortor at, dignissim leo. Etiam at eros nulla. Ut in ante id mauris dictum gravida. Quisque aliquam pharetra lorem nec rutrum. Cras pellentesque laoreet semper. Fusce rhoncus sem non odio pulvinar ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Aenean non elit iaculis, consectetur enim sit amet, cursus est. Duis mollis dolor ex, id lacinia ipsum eleifend et. Nulla nisi purus, euismod et velit eu, euismod sodales arcu. Nulla eu neque a lacus auctor maximus. Nulla facilisi. Aliquam venenatis tortor urna, non sagittis nibh porttitor vitae. Nulla sodales tellus leo, ut malesuada leo euismod ut. Nullam iaculis dui enim, et iaculis magna rutrum at. Donec rhoncus lacus enim, non tempor ipsum rutrum non.

      Phasellus at pretium ante. Cras in tincidunt erat. Maecenas nec ipsum consequat, elementum ex egestas, maximus nunc. Suspendisse sed tristique nunc, sit amet laoreet ipsum. Nunc non mauris eu dui pretium fringilla vel et mauris. Phasellus at lobortis neque, eget egestas eros. Donec sed turpis ipsum. Donec pharetra maximus mauris, vitae interdum enim convallis eu. Donec imperdiet eget mi ut maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mauris non felis commodo placerat. Proin et facilisis lectus.

      Aliquam semper mollis erat, quis porttitor est malesuada iaculis. Mauris convallis leo non lacus iaculis malesuada. Curabitur at malesuada tortor, id tincidunt sapien. Nam tempus orci eget odio vulputate consequat. Sed venenatis aliquet dignissim. Suspendisse pretium viverra risus, ac efficitur nibh placerat vulputate. Vivamus eu egestas augue. Donec viverra ullamcorper tortor sed sagittis.

      Nullam lorem mi, ultrices eget lacus vel, ullamcorper consectetur elit. Nullam quis egestas dui. Proin tincidunt ipsum et vehicula aliquet. Nam eu orci eu dolor vulputate volutpat sed ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In finibus eu dui sed accumsan. Proin luctus massa sed lacus dignissim dignissim. Phasellus a felis lacus. Etiam in dui tristique, mollis lacus sit amet, efficitur lectus. Vivamus ac eros ornare, sollicitudin massa non, suscipit lacus. Integer nunc mauris, tempus ac arcu sit amet, porttitor posuere ligula. Sed porttitor, neque a egestas luctus, lectus sapien vestibulum lorem, ac accumsan diam velit quis lectus. Vestibulum cursus mollis arcu, vitae porttitor purus vestibulum eu. Praesent euismod condimentum eros, at tincidunt massa rhoncus eu.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sapien vel mi rhoncus porttitor. Proin sit amet nisi finibus, cursus dui in, accumsan sapien. Sed molestie fringilla ipsum ac viverra. Praesent sit amet risus vestibulum, mattis tortor at, dignissim leo. Etiam at eros nulla. Ut in ante id mauris dictum gravida. Quisque aliquam pharetra lorem nec rutrum. Cras pellentesque laoreet semper. Fusce rhoncus sem non odio pulvinar ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Aenean non elit iaculis, consectetur enim sit amet, cursus est. Duis mollis dolor ex, id lacinia ipsum eleifend et. Nulla nisi purus, euismod et velit eu, euismod sodales arcu. Nulla eu neque a lacus auctor maximus. Nulla facilisi. Aliquam venenatis tortor urna, non sagittis nibh porttitor vitae. Nulla sodales tellus leo, ut malesuada leo euismod ut. Nullam iaculis dui enim, et iaculis magna rutrum at. Donec rhoncus lacus enim, non tempor ipsum rutrum non.

      Phasellus at pretium ante. Cras in tincidunt erat. Maecenas nec ipsum consequat, elementum ex egestas, maximus nunc. Suspendisse sed tristique nunc, sit amet laoreet ipsum. Nunc non mauris eu dui pretium fringilla vel et mauris. Phasellus at lobortis neque, eget egestas eros. Donec sed turpis ipsum. Donec pharetra maximus mauris, vitae interdum enim convallis eu. Donec imperdiet eget mi ut maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mauris non felis commodo placerat. Proin et facilisis lectus.

      Aliquam semper mollis erat, quis porttitor est malesuada iaculis. Mauris convallis leo non lacus iaculis malesuada. Curabitur at malesuada tortor, id tincidunt sapien. Nam tempus orci eget odio vulputate consequat. Sed venenatis aliquet dignissim. Suspendisse pretium viverra risus, ac efficitur nibh placerat vulputate. Vivamus eu egestas augue. Donec viverra ullamcorper tortor sed sagittis.

      Nullam lorem mi, ultrices eget lacus vel, ullamcorper consectetur elit. Nullam quis egestas dui. Proin tincidunt ipsum et vehicula aliquet. Nam eu orci eu dolor vulputate volutpat sed ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In finibus eu dui sed accumsan. Proin luctus massa sed lacus dignissim dignissim. Phasellus a felis lacus. Etiam in dui tristique, mollis lacus sit amet, efficitur lectus. Vivamus ac eros ornare, sollicitudin massa non, suscipit lacus. Integer nunc mauris, tempus ac arcu sit amet, porttitor posuere ligula. Sed porttitor, neque a egestas luctus, lectus sapien vestibulum lorem, ac accumsan diam velit quis lectus. Vestibulum cursus mollis arcu, vitae porttitor purus vestibulum eu. Praesent euismod condimentum eros, at tincidunt massa rhoncus eu.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sapien vel mi rhoncus porttitor. Proin sit amet nisi finibus, cursus dui in, accumsan sapien. Sed molestie fringilla ipsum ac viverra. Praesent sit amet risus vestibulum, mattis tortor at, dignissim leo. Etiam at eros nulla. Ut in ante id mauris dictum gravida. Quisque aliquam pharetra lorem nec rutrum. Cras pellentesque laoreet semper. Fusce rhoncus sem non odio pulvinar ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Aenean non elit iaculis, consectetur enim sit amet, cursus est. Duis mollis dolor ex, id lacinia ipsum eleifend et. Nulla nisi purus, euismod et velit eu, euismod sodales arcu. Nulla eu neque a lacus auctor maximus. Nulla facilisi. Aliquam venenatis tortor urna, non sagittis nibh porttitor vitae. Nulla sodales tellus leo, ut malesuada leo euismod ut. Nullam iaculis dui enim, et iaculis magna rutrum at. Donec rhoncus lacus enim, non tempor ipsum rutrum non.

      Phasellus at pretium ante. Cras in tincidunt erat. Maecenas nec ipsum consequat, elementum ex egestas, maximus nunc. Suspendisse sed tristique nunc, sit amet laoreet ipsum. Nunc non mauris eu dui pretium fringilla vel et mauris. Phasellus at lobortis neque, eget egestas eros. Donec sed turpis ipsum. Donec pharetra maximus mauris, vitae interdum enim convallis eu. Donec imperdiet eget mi ut maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mauris non felis commodo placerat. Proin et facilisis lectus.

      Aliquam semper mollis erat, quis porttitor est malesuada iaculis. Mauris convallis leo non lacus iaculis malesuada. Curabitur at malesuada tortor, id tincidunt sapien. Nam tempus orci eget odio vulputate consequat. Sed venenatis aliquet dignissim. Suspendisse pretium viverra risus, ac efficitur nibh placerat vulputate. Vivamus eu egestas augue. Donec viverra ullamcorper tortor sed sagittis.

      Nullam lorem mi, ultrices eget lacus vel, ullamcorper consectetur elit. Nullam quis egestas dui. Proin tincidunt ipsum et vehicula aliquet. Nam eu orci eu dolor vulputate volutpat sed ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In finibus eu dui sed accumsan. Proin luctus massa sed lacus dignissim dignissim. Phasellus a felis lacus. Etiam in dui tristique, mollis lacus sit amet, efficitur lectus. Vivamus ac eros ornare, sollicitudin massa non, suscipit lacus. Integer nunc mauris, tempus ac arcu sit amet, porttitor posuere ligula. Sed porttitor, neque a egestas luctus, lectus sapien vestibulum lorem, ac accumsan diam velit quis lectus. Vestibulum cursus mollis arcu, vitae porttitor purus vestibulum eu. Praesent euismod condimentum eros, at tincidunt massa rhoncus eu.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus sapien vel mi rhoncus porttitor. Proin sit amet nisi finibus, cursus dui in, accumsan sapien. Sed molestie fringilla ipsum ac viverra. Praesent sit amet risus vestibulum, mattis tortor at, dignissim leo. Etiam at eros nulla. Ut in ante id mauris dictum gravida. Quisque aliquam pharetra lorem nec rutrum. Cras pellentesque laoreet semper. Fusce rhoncus sem non odio pulvinar ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Aenean non elit iaculis, consectetur enim sit amet, cursus est. Duis mollis dolor ex, id lacinia ipsum eleifend et. Nulla nisi purus, euismod et velit eu, euismod sodales arcu. Nulla eu neque a lacus auctor maximus. Nulla facilisi. Aliquam venenatis tortor urna, non sagittis nibh porttitor vitae. Nulla sodales tellus leo, ut malesuada leo euismod ut. Nullam iaculis dui enim, et iaculis magna rutrum at. Donec rhoncus lacus enim, non tempor ipsum rutrum non.

      Phasellus at pretium ante. Cras in tincidunt erat. Maecenas nec ipsum consequat, elementum ex egestas, maximus nunc. Suspendisse sed tristique nunc, sit amet laoreet ipsum. Nunc non mauris eu dui pretium fringilla vel et mauris. Phasellus at lobortis neque, eget egestas eros. Donec sed turpis ipsum. Donec pharetra maximus mauris, vitae interdum enim convallis eu. Donec imperdiet eget mi ut maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mauris non felis commodo placerat. Proin et facilisis lectus.

      Aliquam semper mollis erat, quis porttitor est malesuada iaculis. Mauris convallis leo non lacus iaculis malesuada. Curabitur at malesuada tortor, id tincidunt sapien. Nam tempus orci eget odio vulputate consequat. Sed venenatis aliquet dignissim. Suspendisse pretium viverra risus, ac efficitur nibh placerat vulputate. Vivamus eu egestas augue. Donec viverra ullamcorper tortor sed sagittis.

      Nullam lorem mi, ultrices eget lacus vel, ullamcorper consectetur elit. Nullam quis egestas dui. Proin tincidunt ipsum et vehicula aliquet. Nam eu orci eu dolor vulputate volutpat sed ac est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In finibus eu dui sed accumsan. Proin luctus massa sed lacus dignissim dignissim. Phasellus a felis lacus. Etiam in dui tristique, mollis lacus sit amet, efficitur lectus. Vivamus ac eros ornare, sollicitudin massa non, suscipit lacus. Integer nunc mauris, tempus ac arcu sit amet, porttitor posuere ligula. Sed porttitor, neque a egestas luctus, lectus sapien vestibulum lorem, ac accumsan diam velit quis lectus. Vestibulum cursus mollis arcu, vitae porttitor purus vestibulum eu. Praesent euismod condimentum eros, at tincidunt massa rhoncus eu.
    </p>
    </div>
  );
}

export default ModalPage;