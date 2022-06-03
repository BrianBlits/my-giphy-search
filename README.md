# My process for creating and fixing errors on My-Giphy-Search

- 1. npx create-react-app my-giphy-search --template typescript 
- 2. Gradient background added
- 3. Create Giphy Developer Account
- 4. Install React Router.
- 5. Fix peer dependencies?
- 6. Faced my fears and fixed the error by using npm install @giphy/react-native-sdk --save --legacy-peer-deps
- 7. Installed Giphy SDK // Now the real fun begins
- 8. Look at Giphy docs for guidance. // docs didn't help went to google.
- 9. npm add @giphy/react-components @giphy/js-fetch-api --save --legacy-peer-deps  // Dont know why i have to keep doing --legacy-peer-deps but I'll look into it later.
- 10. Install npm i @react-hook/resize-observer // Because of "ERROR in src/App.tsx:6:28
TS2307: Cannot find module 'react-resize-observer' or its corresponding type declarations."
- 11. Tried adding apiKey as a const to call on and decided to cut it out. // correction it needs to be a let not const thus allowing me to have less lines of code.
- 12. Having issue with await in my try statement // will need to look into await docs
- 13. Had an issue with connecting the search link, turns out i put a 4 in the link where it didn't belong. 
- 14. Now i need to figure out how to copy link to gif // turns out you can just right click on img and open to giphy so im fine with that for now.
- 15. Upload to GitHub and make it viewable.

<h4>Thank you for reading my decent to madness</h4>
This was a three-day project. I understand it can be much better with time, but I did what I could with the knowledge I currently have, and to be honest, I'm proud that I stuck it through and finished it.
