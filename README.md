# Dev Notes and Points of Interest

## App-Wide Elements 
- Each of the pages in this app features a responsive button that appears in the bottom right corner of the screen when scrolling down 
the page. This button allows users to quickly scroll back to the top of the page on demand

## Group Landing Screens
- Filter and search controls added to the top of each respective view 
- Add Group functionality moved into modal with flexible controls and settings for making group creation more streamlined and organized
- Notification bell added to the top and badge indicator added to show if there are new notifications 
  - Notification modal added with dismissable and scrollable notification toasts 
  - Mark all as read button to dismiss all notificaiton toasts

### Feed 
- Filter controls added for filtering on several factors 
- Overly long blurbs of text are collapsed and a "See More" button is added to keep the feed from being one massive block of text

### My Groups
- Each group has the image, name, count, and publicity status displayed on its card
- Chat message indicator would show a badge for new chat messages in the group, clicking on it directs the user directly to the 
group chat 
- Feed activity indicator would show a badge for new feed activity in the group, clicking on it directs the user directly to the 
group feed 

### Discover 
- Scrollable groups displayed on the screen under a search bar
- About button opens a modal to show a brief about the group itself 
	- The "About" Section would only show applicable information as it applied 
	- The button would change between "Join Group" for Public groups and "Request to Join" for Private groups 

## Group Selection 

### Group Feed 
- Only shows relevant group feed elements 

### Group Cosplays 
- Filtering control set up for baseline filtering 
- Search bar should allow for searching by cosplay name or username 
- Each one has a seperate container with a focused image, hype counter, and progress tracker (keeps it organized, less wall-of-text feeling)

### Group Chat
- Individual messages are deliniated by their own container
- Messages being sent out are flipped to the opposing side and are given a different color to allow for easily keeping track of 
sent messages 
- "Jump to Latest" button appears when the user scrolls up through the history and is not at the bottom of the chat to see the 
latest messages 
