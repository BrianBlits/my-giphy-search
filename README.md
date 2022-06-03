# My process for creating and fixing errors on My-Giphy-Search

Step 1. npx create-react-app my-giphy-search --template typescript
Step 2. Gradient background added
Step 3. Create Giphy Developer Account
Step 4. Install React Router.
Step 5. Fix peer dependencies?
Step 6. Faced my fears and fixed the error by using npm install @giphy/react-native-sdk --save --legacy-peer-deps
Step 7. Installed Giphy SDK // Now the real fun begins
Step 8. Look at Giphy docs for guidance. // docs didn't help went to google.
Step 9. npm add @giphy/react-components @giphy/js-fetch-api --save --legacy-peer-deps  // Dont know why i have to keep doing --legacy-peer-deps but I'll look into it later.
Step 10. Install npm i @react-hook/resize-observer // Because of "ERROR in src/App.tsx:6:28
TS2307: Cannot find module 'react-resize-observer' or its corresponding type declarations."
Step 11. Tried adding apiKey as a const to call on and decided to cut it out. // correction it needs to be a let not const thus allowing me to have less lines of code.
Step 12. Having issue with await in my try statement // will need to look into await docs
Step 13. Had an issue with connecting the search link, turns out i put a 4 in the link where it didn't belong. 
Step 14. Now i need to figure out how to copy link to gif // turns out you can just right click on img and open to giphy so im fine with that for now.
Step 15. Upload to GitHub and make it viewable.