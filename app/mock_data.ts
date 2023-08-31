import { prisma } from "@/lib/prisma"

const main = async () => {
    const products = [{
        "title": "GameX",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "price": 736.24,
        "rating": 1.2,
        "discountPercentage": 52.77,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "clothing"
      }, {
        "title": "SmartMax",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "price": 358.83,
        "rating": 4.3,
        "discountPercentage": 95.56,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "gaming"
      }, {
        "title": "TechLife",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "price": 392.37,
        "rating": 1.6,
        "discountPercentage": 30.23,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "headphones"
      }, {
        "title": "GroceryPro",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "price": 470.64,
        "rating": 3.0,
        "discountPercentage": 80.13,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "gaming"
      }, {
        "title": "SoundMaxX",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "price": 530.58,
        "rating": 4.6,
        "discountPercentage": 74.23,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "smartwatch"
      }, {
        "title": "ePhone",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "price": 798.57,
        "rating": 2.2,
        "discountPercentage": 15.42,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "gaming"
      }, {
        "title": "FashionFusion",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "price": 312.55,
        "rating": 1.8,
        "discountPercentage": 12.09,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "headphones"
      }, {
        "title": "PhonePro",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "price": 869.59,
        "rating": 4.3,
        "discountPercentage": 86.52,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "smartwatch"
      }, {
        "title": "SoundMaxX",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "price": 242.02,
        "rating": 2.5,
        "discountPercentage": 61.91,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "groceries"
      }, {
        "title": "FashionPro",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        "price": 303.76,
        "rating": 3.9,
        "discountPercentage": 51.89,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "headphones"
      }, {
        "title": "MediProTech",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "price": 407.86,
        "rating": 1.2,
        "discountPercentage": 99.85,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "medicine"
      }, {
        "title": "FashionPro",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "price": 636.17,
        "rating": 2.7,
        "discountPercentage": 79.62,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "medicine"
      }, {
        "title": "SmartFit",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "price": 216.76,
        "rating": 3.6,
        "discountPercentage": 87.55,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "electronics"
      }, {
        "title": "FashionTrend",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "price": 558.9,
        "rating": 4.8,
        "discountPercentage": 27.57,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "smartwatch"
      }, {
        "title": "SmartLifeX",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "price": 520.02,
        "rating": 3.9,
        "discountPercentage": 68.73,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "Fashionista",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "price": 313.07,
        "rating": 2.2,
        "discountPercentage": 36.74,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "electronics"
      }, {
        "title": "GroceryTech",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "price": 680.25,
        "rating": 2.5,
        "discountPercentage": 32.71,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "phones"
      }, {
        "title": "GameElite",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "price": 825.64,
        "rating": 1.7,
        "discountPercentage": 30.92,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "headphones"
      }, {
        "title": "TechWizard",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "price": 944.73,
        "rating": 4.3,
        "discountPercentage": 12.14,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "CompTechPlus",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "price": 526.81,
        "rating": 1.3,
        "discountPercentage": 63.48,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "groceries"
      }, {
        "title": "PhoneProX",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "price": 530.13,
        "rating": 3.3,
        "discountPercentage": 23.76,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "electronics"
      }, {
        "title": "SoundPods",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "price": 12.26,
        "rating": 2.5,
        "discountPercentage": 43.65,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "smartwatch"
      }, {
        "title": "ElectroMaxX",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "price": 418.96,
        "rating": 4.0,
        "discountPercentage": 56.4,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "headphones"
      }, {
        "title": "GroceryMaster",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "price": 519.51,
        "rating": 3.5,
        "discountPercentage": 97.99,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "phones"
      }, {
        "title": "TechMax",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "price": 105.53,
        "rating": 1.2,
        "discountPercentage": 59.16,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "gaming"
      }, {
        "title": "SmartLife",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "price": 985.57,
        "rating": 3.7,
        "discountPercentage": 13.73,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "medicine"
      }, {
        "title": "FashionFusion",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "price": 887.6,
        "rating": 4.6,
        "discountPercentage": 79.25,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "phones"
      }, {
        "title": "FashionPro",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "price": 477.75,
        "rating": 3.9,
        "discountPercentage": 45.49,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "phones"
      }, {
        "title": "GroceryExpress",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "price": 748.37,
        "rating": 4.9,
        "discountPercentage": 28.74,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "phones"
      }, {
        "title": "GameX",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "price": 878.38,
        "rating": 3.9,
        "discountPercentage": 56.3,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "smartwatch"
      }, {
        "title": "GameX",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "price": 638.55,
        "rating": 3.7,
        "discountPercentage": 91.84,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "smartwatch"
      }, {
        "title": "ElectroTech",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "price": 438.28,
        "rating": 4.5,
        "discountPercentage": 53.49,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "groceries"
      }, {
        "title": "SoundPro",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "price": 74.5,
        "rating": 4.4,
        "discountPercentage": 13.87,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "clothing"
      }, {
        "title": "CompTech",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "price": 826.76,
        "rating": 3.0,
        "discountPercentage": 58.47,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "phones"
      }, {
        "title": "SmartMax",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "price": 958.13,
        "rating": 3.1,
        "discountPercentage": 77.93,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "clothing"
      }, {
        "title": "SoundLife",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "price": 715.08,
        "rating": 2.7,
        "discountPercentage": 30.9,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "medicine"
      }, {
        "title": "CompTechX",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "price": 103.48,
        "rating": 1.7,
        "discountPercentage": 82.86,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "headphones"
      }, {
        "title": "TechWizard",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "price": 762.77,
        "rating": 4.3,
        "discountPercentage": 47.13,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "medicine"
      }, {
        "title": "MediLife",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "price": 438.52,
        "rating": 3.6,
        "discountPercentage": 10.14,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "groceries"
      }, {
        "title": "SoundTech",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "price": 617.06,
        "rating": 2.8,
        "discountPercentage": 0.96,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "medicine"
      }, {
        "title": "SmartStyle",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "price": 147.32,
        "rating": 3.7,
        "discountPercentage": 72.64,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "headphones"
      }, {
        "title": "GameProTech",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "price": 877.7,
        "rating": 4.1,
        "discountPercentage": 27.95,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "medicine"
      }, {
        "title": "PhonePro",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "price": 323.61,
        "rating": 1.9,
        "discountPercentage": 49.53,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "smartwatch"
      }, {
        "title": "SoundBeats",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "price": 72.67,
        "rating": 3.0,
        "discountPercentage": 55.76,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "headphones"
      }, {
        "title": "ElectroMaxPro",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "price": 526.38,
        "rating": 2.6,
        "discountPercentage": 8.59,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "medicine"
      }, {
        "title": "MediTech",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "price": 123.57,
        "rating": 3.5,
        "discountPercentage": 42.55,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "smartwatch"
      }, {
        "title": "CompTech",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "price": 562.97,
        "rating": 4.2,
        "discountPercentage": 66.47,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "phones"
      }, {
        "title": "ElectroProX",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "price": 130.11,
        "rating": 2.0,
        "discountPercentage": 24.23,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "headphones"
      }, {
        "title": "SoundBliss",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "price": 541.57,
        "rating": 4.3,
        "discountPercentage": 31.2,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "phones"
      }, {
        "title": "MediWell",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "price": 665.8,
        "rating": 1.9,
        "discountPercentage": 51.74,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "smartwatch"
      }, {
        "title": "ElectroLife",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "price": 198.82,
        "rating": 3.0,
        "discountPercentage": 90.18,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "electronics"
      }, {
        "title": "ElectroLifeX",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "price": 583.6,
        "rating": 2.1,
        "discountPercentage": 90.35,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "clothing"
      }, {
        "title": "PhonePro",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "price": 817.95,
        "rating": 3.8,
        "discountPercentage": 76.2,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "electronics"
      }, {
        "title": "SoundBeats",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "price": 120.78,
        "rating": 3.5,
        "discountPercentage": 39.87,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "headphones"
      }, {
        "title": "SmartX",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "price": 731.53,
        "rating": 4.3,
        "discountPercentage": 45.22,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "clothing"
      }, {
        "title": "PhoneProX",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "price": 553.56,
        "rating": 1.4,
        "discountPercentage": 71.67,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "gaming"
      }, {
        "title": "PhonePlus",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "price": 946.84,
        "rating": 2.6,
        "discountPercentage": 86.17,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "groceries"
      }, {
        "title": "ElectroTech",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "price": 427.63,
        "rating": 3.8,
        "discountPercentage": 87.95,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "smartwatch"
      }, {
        "title": "PhoneElite",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "price": 901.93,
        "rating": 1.8,
        "discountPercentage": 57.09,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "clothing"
      }, {
        "title": "FashionProX",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "price": 810.11,
        "rating": 3.4,
        "discountPercentage": 41.34,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "phones"
      }, {
        "title": "GameZone",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "price": 221.43,
        "rating": 3.8,
        "discountPercentage": 7.02,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "gaming"
      }, {
        "title": "PhonePlus",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "price": 124.44,
        "rating": 2.8,
        "discountPercentage": 19.4,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "electronics"
      }, {
        "title": "SmartFit",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "price": 726.71,
        "rating": 3.1,
        "discountPercentage": 89.57,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "headphones"
      }, {
        "title": "FashionTech",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "price": 873.5,
        "rating": 3.2,
        "discountPercentage": 53.03,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "computers"
      }, {
        "title": "CompTechX",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "price": 774.12,
        "rating": 4.6,
        "discountPercentage": 15.13,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "headphones"
      }, {
        "title": "GamePro",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "price": 279.96,
        "rating": 1.5,
        "discountPercentage": 65.38,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "CompTechMax",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "price": 782.37,
        "rating": 2.6,
        "discountPercentage": 91.55,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "electronics"
      }, {
        "title": "SoundBliss",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "price": 654.14,
        "rating": 1.7,
        "discountPercentage": 7.22,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "gaming"
      }, {
        "title": "TechLifeX",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "price": 20.78,
        "rating": 2.9,
        "discountPercentage": 86.38,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "headphones"
      }, {
        "title": "GroceryPro",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "price": 404.6,
        "rating": 4.6,
        "discountPercentage": 87.98,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "gaming"
      }, {
        "title": "CompTechX",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "price": 905.25,
        "rating": 3.8,
        "discountPercentage": 84.02,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "GamePro",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "price": 457.06,
        "rating": 3.5,
        "discountPercentage": 74.32,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "gaming"
      }, {
        "title": "PhonePro",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "price": 510.41,
        "rating": 3.6,
        "discountPercentage": 32.58,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "headphones"
      }, {
        "title": "PhoneElite",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "price": 721.66,
        "rating": 1.1,
        "discountPercentage": 36.16,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "electronics"
      }, {
        "title": "MediProTech",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "price": 180.36,
        "rating": 3.9,
        "discountPercentage": 49.64,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "Fashionista",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "price": 730.27,
        "rating": 3.1,
        "discountPercentage": 29.75,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "electronics"
      }, {
        "title": "SmartX",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "price": 224.61,
        "rating": 1.2,
        "discountPercentage": 35.07,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "smartwatch"
      }, {
        "title": "CompTech",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "price": 994.9,
        "rating": 1.6,
        "discountPercentage": 80.27,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "headphones"
      }, {
        "title": "TechElite",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "price": 197.89,
        "rating": 3.3,
        "discountPercentage": 71.36,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "CompTechMaxX",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "price": 775.09,
        "rating": 2.0,
        "discountPercentage": 11.82,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "gaming"
      }, {
        "title": "TechX",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "price": 318.0,
        "rating": 3.2,
        "discountPercentage": 6.81,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "computers"
      }, {
        "title": "SmartGear",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "price": 892.3,
        "rating": 4.5,
        "discountPercentage": 9.1,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "clothing"
      }, {
        "title": "Phone X",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "price": 962.98,
        "rating": 1.6,
        "discountPercentage": 3.44,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "groceries"
      }, {
        "title": "MediWell",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "price": 959.57,
        "rating": 4.9,
        "discountPercentage": 29.96,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "computers"
      }, {
        "title": "FashionTrend",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "price": 659.08,
        "rating": 2.1,
        "discountPercentage": 46.17,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "medicine"
      }, {
        "title": "FashionMax",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "price": 984.81,
        "rating": 1.0,
        "discountPercentage": 42.13,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "smartwatch"
      }, {
        "title": "PhoneLife",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "price": 154.73,
        "rating": 3.6,
        "discountPercentage": 67.33,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "gaming"
      }, {
        "title": "FashionMax",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "price": 337.28,
        "rating": 2.2,
        "discountPercentage": 98.77,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "computers"
      }, {
        "title": "ElectroTechX",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "price": 752.06,
        "rating": 1.2,
        "discountPercentage": 90.46,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "medicine"
      }, {
        "title": "FashionProX",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "price": 663.7,
        "rating": 3.2,
        "discountPercentage": 84.19,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "phones"
      }, {
        "title": "GameTech",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "price": 803.19,
        "rating": 1.6,
        "discountPercentage": 1.53,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "medicine"
      }, {
        "title": "SoundPro",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "price": 701.24,
        "rating": 4.1,
        "discountPercentage": 10.05,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "smartwatch"
      }, {
        "title": "ElectroLifeX",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "price": 75.4,
        "rating": 2.7,
        "discountPercentage": 23.25,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "smartwatch"
      }, {
        "title": "CompTechElite",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "price": 510.05,
        "rating": 1.6,
        "discountPercentage": 93.94,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "clothing"
      }, {
        "title": "SoundBeats",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "price": 840.8,
        "rating": 3.0,
        "discountPercentage": 30.97,
        "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        "category": "gaming"
      }, {
        "title": "CompTechTech",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "price": 168.61,
        "rating": 2.4,
        "discountPercentage": 47.54,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "phones"
      }, {
        "title": "PhonePro",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "price": 235.86,
        "rating": 2.5,
        "discountPercentage": 60.56,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "smartwatch"
      }, {
        "title": "SoundElite",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "price": 223.53,
        "rating": 2.2,
        "discountPercentage": 88.34,
        "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff",
        "category": "headphones"
      }, {
        "title": "GroceryElite",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "price": 37.35,
        "rating": 3.0,
        "discountPercentage": 19.86,
        "thumbnail": "http://dummyimage.com/250x250.png/ff4444/ffffff",
        "category": "computers"
      }, {
        "title": "SoundMax",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "price": 963.28,
        "rating": 4.6,
        "discountPercentage": 86.4,
        "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000",
        "category": "medicine"
      }]


    const result = await prisma.product.createMany({
        data: products
    })
}

