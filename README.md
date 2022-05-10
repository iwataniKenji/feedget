<section align="center">
    <img src="./assets/cover.png" />
</section>

<h2 align="center">Summary</h2>

<p align="center">
    <a href="#about">📙 About</a>
    <a href="#preview">🖼️ Preview</a>
    <a href="#start">📖 How to Start</a>
    <a href="#features">💡 Features</a>
    <a href="#technologies">💻 Technologies</a>
</p>

<h4 align="center">
   ✔️ FeedGet project finished ✔️
</h4>

<h2 id="about">📙 About</H2>

<p><strong>Feedget</strong> is a useful widget to implement on any application that needs a support area with submit forms. The main feature is that it allows the user to insert the screenshot of the error screen at the moment and send it with the form text when submitted. In addiction, this app is totally well planned for accessibility as well.</p>
<p>The <strong>Next Level Week</strong> is a whole week coding event based on the development of a complete application using some of the most used tools available on the JavaScript Stack, such as Tailwind, React and React Native. The purpose is all about keep learning, sharing the challenges with other student, making networking and improving on your hard and soft skills.</p>
<p>This project is originally created on Ignite from <a href="https://www.rocketseat.com.br/">Rocketseat</a> and made by <a href="https://www.linkedin.com/in/kleverson-kenji-iwatani/">Kenji Iwatani</a></p>

<h3><a href="https://feedget-kenji.vercel.app/">Check website &rarr;</a></h3>

---

<H2 id="preview">🖼️ Preview</H2>

<section align="center">
    <img alt="feedget project overview" src="./assets/preview.gif"/>
</section>

---

<H2 id="start">📖 How to Start</H2>

<h4>Starting this repository</h3>

```bash
# Clone this repository
$ git clone https://github.com/iwataniKenji/feedget

# Access the project directory
$ cd feedget
```

<h4>Server</h4>

```bash
# Access the "server" folder
$ cd server

# Install dependencies
$ npm install

# Rename '.env.example' to '.env' and set your env variables
$ ren ".env.example" ".env"

# With a PostgreSQL running, run the migrations
$ npx prisma migrate dev

# Start the server
$ npm run dev
```

<h4>Web</h4>

```bash
# Access the "web" folder
$ cd web

# Install dependencies
$ npm install

# Make a copy of '.env.local.example' to '.env.local'
$ ren ".env.example" ".env.local"

# Start the application
$ npm run dev
```

<h4>Mobile</h4>

```bash
# Access the 'mobile' folder
$ cd mobile

# Install dependencies
$ npm install

# Start bundle
$ npm run start
```

---

<H2 id="features">💡 Features</H2>

- [x] Declarative interface with Tailwind
- [x] Screenshot usage on forms
- [x] Accessibility for "keyboard only" users
- [x] Communication between components through props
- [x] Loading spinner
- [x] Mobile version developed with React Native
- [x] Gesture on mobile version
- [x] Complete frontend and backend integration
- [x] Mailtrap to receive and check the information from input sending
- [x] Test automation with Jest

---

<H2 id="technologies">💻 Technologies</H2>

<h4>Frontend</h4>

- [x] <a href="https://vitejs.dev/">Vite</a>
- [x] <a href="https://reactjs.org/">React</a>
- [x] <a href="https://www.typescriptlang.org/">Typescript</a>
- [x] <a href="https://tailwindcss.com/">Tailwindcss</a>
- [x] <a href="https://phosphoricons.com/">Phosphor Icons</a>
- [x] <a href="https://axios-http.com/">Axios</a>

<h4>Mobile</h4>

- [x] <a href="https://reactnative.dev/">React Native</a>
- [x] <a href="https://expo.dev/">Expo</a>
- [x] <a href="https://docs.swmansion.com/react-native-reanimated/">Reanimated</a>
- [x] <a href="https://github.com/gorhom/react-native-bottom-sheet">Bottom Sheet</a>
- [x] <a href="https://github.com/software-mansion/react-native-gesture-handler">Gesture Handler</a>

<h4>Backend and Deployment</h4>

- [x] <a href="https://expressjs.com/">Express</a>
- [x] <a href="https://www.prisma.io/">Prisma</a>
- [x] <a href="https://mailtrap.io/">Mailtrap</a>
- [x] <a href="https://insomnia.rest/">Insomnia</a>
- [x] <a href="https://jestjs.io/">Jest</a>
- [x] <a href="https://vercel.com/">Vercel</a>
- [x] <a href="https://heroku.com">Heroku</a>
- [x] <a href="https://mailtrap.io/">Mailtrap</a>
