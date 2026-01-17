# VTuber Calculator Test Checklist

## Functionality Testing

### Core Features
- [ ] All Steps 1-16 working correctly
- [ ] Service Type selection (Full Package, Custom 3D, VRoid, Rigging)
- [ ] Body Type selection (Fullbody, Halfbody, Chibi)
- [ ] Complexity selection (Simple, Standard, Complex)
- [ ] All sliders working (Expressions, Hand Poses, Outfits, Hairstyles, Accessories)
- [ ] All checkboxes working (Special Parts, Tracking options, Source Files)
- [ ] Commercial Rights radio buttons
- [ ] Timeline radio buttons
- [ ] Revision Rounds radio buttons
- [ ] Confidentiality checkbox

### Pricing Calculations
- [ ] Base price calculation accurate
- [ ] Body type multiplier applied correctly (×0.6, ×0.7, ×1.0)
- [ ] Complexity multiplier applied correctly (×1.0, ×1.4, ×1.8)
- [ ] Sliders add correct amounts
- [ ] ARKit option correctly adds +$400
- [ ] Commercial rights multiplier applied (×1.0 to ×1.5)
- [ ] Timeline multiplier applied (×0.95 to ×1.6)
- [ ] Revision multiplier applied (×1.0 to ×1.35)
- [ ] Private commission adds +$600
- [ ] ±5% price range calculated correctly
- [ ] Price breakdown displays all selections
- [ ] Mobile quote panel shows same prices as sidebar

### References & Upload
- [ ] File upload drag & drop works
- [ ] File upload click to select works
- [ ] File type validation (JPG, PNG, WEBP only)
- [ ] File size validation (max 10MB)
- [ ] Maximum 5 files enforced
- [ ] Image thumbnails display correctly
- [ ] Delete button removes images
- [ ] Reference URLs textarea works
- [ ] Additional notes textarea works
- [ ] Character counter updates (500 max)

### Contact Form
- [ ] Name field required validation
- [ ] Email field required validation
- [ ] Email format validation
- [ ] Discord ID optional field works
- [ ] Privacy checkbox required validation
- [ ] Privacy policy modal displays
- [ ] Submit button disabled until form valid
- [ ] Submit button enabled when all required fields filled

### Submission
- [ ] Discord webhook notification sent (if configured)
- [ ] EmailJS confirmation sent (if configured)
- [ ] Success message displayed
- [ ] Error handling for failed Discord send
- [ ] Error handling for failed email send
- [ ] Form resets after successful submission
- [ ] Page reloads after submission

### Progress Saving
- [ ] LocalStorage saves progress on each step change
- [ ] Progress restoration prompt appears on reload
- [ ] "Start Over" button clears saved progress
- [ ] "Continue" button restores all selections
- [ ] Saved progress expires after 24 hours
- [ ] Old progress is automatically cleared
- [ ] All UI states restored correctly (sliders, checkboxes, radios, text inputs)
- [ ] Current step restored correctly
- [ ] Price calculation restored correctly

### Navigation
- [ ] Previous button disabled on Step 1
- [ ] Next button disabled until required selection made
- [ ] Next button auto-enabled for optional steps (3, 5, 6-10, 14, 15)
- [ ] Next button hidden on Step 16
- [ ] Progress bar updates correctly (6.25% per step)
- [ ] Step title updates correctly
- [ ] Keyboard navigation works (Arrow keys)
- [ ] Escape key closes mobile modal

## Responsive Design Testing

### Desktop (1920px)
- [ ] Layout renders correctly
- [ ] 70/30 grid layout working
- [ ] Sticky sidebar functioning
- [ ] All elements visible and accessible
- [ ] No horizontal scrolling
- [ ] Buttons and inputs proper size

### Laptop (1366px)
- [ ] Layout renders correctly
- [ ] Sidebar remains sticky
- [ ] All content readable
- [ ] No overlap issues

### Tablet Portrait (768px)
- [ ] 60/40 grid layout
- [ ] Sidebar positioned correctly
- [ ] Touch targets adequate size
- [ ] Navigation working properly

### Mobile (375px)
- [ ] Single column layout
- [ ] Desktop sidebar hidden
- [ ] Mobile bottom quote panel visible
- [ ] Quote panel shows price
- [ ] "Details" button expands modal
- [ ] Modal displays full breakdown
- [ ] Close button (×) works
- [ ] Tap outside modal closes it
- [ ] Step content has bottom padding (for panel)
- [ ] All inputs and buttons touch-friendly (44px minimum)
- [ ] Sliders have larger handles (28px)
- [ ] No horizontal scrolling

### Landscape Orientation
- [ ] Layout adapts correctly
- [ ] Content remains accessible
- [ ] Navigation still functional

## Browser Compatibility

### Chrome/Edge (Chromium)
- [ ] All features working
- [ ] Animations smooth
- [ ] No console errors
- [ ] File upload works
- [ ] LocalStorage works

### Firefox
- [ ] All features working
- [ ] Slider styling correct
- [ ] Fetch API working
- [ ] LocalStorage works

### Safari (iOS/macOS)
- [ ] All features working
- [ ] File upload works on iOS
- [ ] Touch events work
- [ ] LocalStorage works
- [ ] No webkit-specific issues

### Edge Legacy
- [ ] Basic functionality works
- [ ] Polyfills if needed
- [ ] Graceful degradation

## Accessibility (A11y)

### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements
- [ ] Enter key activates buttons
- [ ] Space bar toggles checkboxes/radios
- [ ] Arrow keys navigate between steps (when not in inputs)
- [ ] Escape closes modals
- [ ] Skip to content link works (Tab from top)
- [ ] Focus visible on all interactive elements

### Screen Reader
- [ ] All form labels read correctly
- [ ] ARIA labels present on icon buttons
- [ ] Modal has proper ARIA attributes
- [ ] Role attributes on custom controls
- [ ] Step progress announced
- [ ] Error messages announced
- [ ] Success messages announced

### Visual
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] Text scalable without breaking layout
- [ ] No information conveyed by color alone
- [ ] Required fields marked with * and label

## Performance

### Load Time
- [ ] Initial page load < 3 seconds
- [ ] Tailwind CSS loads from CDN
- [ ] No render-blocking resources
- [ ] Images optimized (if any)

### Interactions
- [ ] Step transitions smooth (< 300ms)
- [ ] Price updates instantly
- [ ] No lag when typing in inputs
- [ ] Slider updates responsive
- [ ] Mobile modal opens smoothly

### Memory
- [ ] No memory leaks
- [ ] LocalStorage doesn't exceed quota
- [ ] File uploads don't cause crashes

## Error Handling

### Upload Errors
- [ ] Error shown for files > 10MB
- [ ] Error shown for unsupported formats
- [ ] Error shown when exceeding 5 files
- [ ] Error messages user-friendly
- [ ] Upload continues after error

### Form Errors
- [ ] Invalid email format shows error
- [ ] Empty required fields show validation
- [ ] Submit button stays disabled until valid
- [ ] Clear error messages displayed

### Network Errors
- [ ] Discord webhook failure handled gracefully
- [ ] Email send failure handled gracefully
- [ ] User notified if services fail
- [ ] Submission can still complete
- [ ] Retry logic doesn't break app

### Edge Cases
- [ ] Handles empty localStorage gracefully
- [ ] Handles corrupted localStorage data
- [ ] Handles very old saved progress
- [ ] Handles missing DOM elements
- [ ] Handles rapid button clicking
- [ ] Handles back/forward browser navigation

## Security

### Input Validation
- [ ] Email validated server-side (if applicable)
- [ ] File types validated
- [ ] File sizes validated
- [ ] No XSS vulnerabilities in user inputs
- [ ] No SQL injection possible (N/A for static)

### Data Privacy
- [ ] Webhook URLs not exposed in client code
- [ ] API keys not exposed in client code
- [ ] Sensitive data not logged to console
- [ ] LocalStorage data reasonable
- [ ] Privacy policy accurate

## Integration Testing

### Discord Webhook
- [ ] Message received in Discord channel
- [ ] All selections included in message
- [ ] ARKit selection visible
- [ ] Formatting correct (markdown)
- [ ] Timestamp in KST
- [ ] Client info correct
- [ ] Price range correct

### EmailJS
- [ ] Confirmation email received
- [ ] Email template variables populated
- [ ] Reply-to address correct
- [ ] Email formatting correct
- [ ] Branding consistent

## Final Checks

### Content
- [ ] All text in English (professional)
- [ ] No typos or grammar errors
- [ ] Pricing values accurate
- [ ] Instructions clear
- [ ] Error messages helpful

### UX
- [ ] Navigation intuitive
- [ ] Progress clearly shown
- [ ] Actions have clear feedback
- [ ] Loading states informative
- [ ] Success states celebratory
- [ ] Errors recoverable

### Polish
- [ ] Animations smooth
- [ ] Colors consistent with brand
- [ ] Spacing consistent
- [ ] Hover states visible
- [ ] Active states clear
- [ ] Disabled states obvious

## Sign-Off

**Tested by:** _______________
**Date:** _______________
**Build/Version:** _______________
**Overall Status:** ☐ Pass ☐ Fail ☐ Pass with notes

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
