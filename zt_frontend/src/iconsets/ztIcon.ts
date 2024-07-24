import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'

const ztAliases = {
	clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 15C6.61553 15 5.26216 14.5895 4.11101 13.8203C2.95987 13.0511 2.06266 11.9579 1.53285 10.6788C1.00303 9.3997 0.86441 7.99224 1.13451 6.63437C1.4046 5.2765 2.07129 4.02922 3.05026 3.05026C4.02922 2.07129 5.2765 1.4046 6.63437 1.13451C7.99224 0.86441 9.3997 1.00303 10.6788 1.53285C11.9579 2.06266 13.0511 2.95987 13.8203 4.11101C14.5895 5.26216 15 6.61553 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill="currentColor"/><path d="M10.295 11L7.5 8.205V3.5H8.5V7.79L11 10.295L10.295 11Z" fill="currentColor"/></svg>',	
	cubic: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13.252 4.06815L7.252 0.568148C7.17552 0.523518 7.08855 0.5 7 0.5C6.91145 0.5 6.82448 0.523518 6.748 0.568148L0.748 4.06815C0.672511 4.1122 0.609888 4.17527 0.566373 4.25107C0.522859 4.32687 0.499974 4.41275 0.5 4.50015V11.5001C0.499974 11.5875 0.522859 11.6734 0.566373 11.7492C0.609888 11.825 0.672511 11.8881 0.748 11.9321L6.748 15.4321C6.82448 15.4768 6.91145 15.5003 7 15.5003C7.08855 15.5003 7.17552 15.4768 7.252 15.4321L13.252 11.9321C13.3275 11.8881 13.3901 11.825 13.4336 11.7492C13.4771 11.6734 13.5 11.5875 13.5 11.5001V4.50015C13.5 4.41275 13.4771 4.32687 13.4336 4.25107C13.3901 4.17527 13.3275 4.1122 13.252 4.06815ZM7 1.57915L12.008 4.50015L7 7.42115L1.992 4.50015L7 1.57915ZM1.5 5.37015L6.5 8.28665V14.1301L1.5 11.2131V5.37015ZM7.5 14.1301V8.28715L12.5 5.37065V11.2131L7.5 14.1301Z" fill="currentColor"/></svg>',	
	circleAdd: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z" fill="currentColor"/><path d="M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z" fill="currentColor"/></svg>',	
	code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.25 12L18 17.25L16.9425 16.1925L21.1275 12L16.9425 7.8075L18 6.75L23.25 12ZM0.75 12L6 6.75L7.0575 7.8075L2.8725 12L7.0575 16.1925L6 17.25L0.75 12ZM9.315 19.113L13.23 4.5L14.679 4.88775L10.764 19.5L9.315 19.113Z" fill="currentColor"/></svg>',	
	delete: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z" fill="currentColor"/><path d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z" fill="currentColor"/></svg>',
	done: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 9" fill="none"><path d="M3.5 5.8535L2.25 4.60325L2.60325 4.25L3.5 5.1465L5.39625 3.25L5.75 3.60375L3.5 5.8535Z" fill="currentColor"/><path d="M4 1C3.30777 1 2.63108 1.20527 2.05551 1.58986C1.47993 1.97444 1.03133 2.52107 0.766423 3.16061C0.501516 3.80015 0.432205 4.50388 0.567253 5.18282C0.702301 5.86175 1.03564 6.48539 1.52513 6.97487C2.01461 7.46436 2.63825 7.7977 3.31719 7.93275C3.99612 8.0678 4.69985 7.99849 5.33939 7.73358C5.97894 7.46867 6.52556 7.02007 6.91015 6.4445C7.29473 5.86892 7.5 5.19223 7.5 4.5C7.5 3.57174 7.13125 2.6815 6.47487 2.02513C5.8185 1.36875 4.92826 1 4 1ZM4 7.5C3.40666 7.5 2.82664 7.32405 2.33329 6.99441C1.83994 6.66476 1.45543 6.19623 1.22836 5.64805C1.0013 5.09987 0.94189 4.49667 1.05765 3.91473C1.1734 3.33279 1.45912 2.79824 1.87868 2.37868C2.29824 1.95912 2.83279 1.6734 3.41473 1.55764C3.99667 1.44189 4.59987 1.5013 5.14805 1.72836C5.69623 1.95542 6.16477 2.33994 6.49441 2.83329C6.82405 3.32664 7 3.90666 7 4.5C7 5.29565 6.68393 6.05871 6.12132 6.62132C5.55871 7.18393 4.79565 7.5 4 7.5Z" fill="currentColor"/></svg>',	
	dot: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/></svg>',	
	dropdown: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M7 10l5 5 5-5"></path> </g> </g></svg>',
	duplicate: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.55 11.025L15.975 6.45C15.75 6.15 15.375 6 15 6H9C8.175 6 7.5 6.675 7.5 7.5V21C7.5 21.825 8.175 22.5 9 22.5H19.5C20.325 22.5 21 21.825 21 21V12.075C21 11.7 20.85 11.325 20.55 11.025ZM15 7.5L19.425 12H15V7.5ZM9 21V7.5H13.5V12C13.5 12.825 14.175 13.5 15 13.5H19.5V21H9Z" fill="currentColor"/><path d="M4.5 13.5H3V3C3 2.175 3.675 1.5 4.5 1.5H15V3H4.5V13.5Z" fill="currentColor"/></svg>',	
	edit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1.5 19.5H22.5V21H1.5V19.5ZM19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z" fill="currentColor"/></svg>',
	markdown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1.5 5.25V6.75H6.75V18.75H8.25V6.75H13.5V5.25H1.5ZM22.5 8.307L21.942 6.91425L19.5 7.8915V5.25H18V7.89225L15.558 6.915L15 8.30775L17.5627 9.333L15.675 11.85L16.875 12.75L18.75 10.2502L20.625 12.75L21.825 11.85L19.9373 9.33225L22.5 8.307Z" fill="currentColor"/></svg>',	
	message: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.305 22.5L12 21.75L15 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.87L13.305 22.5Z" fill="currentColor"/></svg>',	
	more: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.375 12C9.375 11.4808 9.52895 10.9733 9.81739 10.5416C10.1058 10.1099 10.5158 9.77349 10.9955 9.57481C11.4751 9.37613 12.0029 9.32415 12.5121 9.42544C13.0213 9.52672 13.489 9.77673 13.8562 10.1438C14.2233 10.511 14.4733 10.9787 14.5746 11.4879C14.6758 11.9971 14.6239 12.5249 14.4252 13.0045C14.2265 13.4842 13.89 13.8942 13.4584 14.1826C13.0267 14.471 12.5192 14.625 12 14.625C11.3038 14.625 10.6361 14.3484 10.1438 13.8562C9.65156 13.3639 9.375 12.6962 9.375 12ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.1099 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52672 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.39 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875ZM12 7.125C12.5192 7.125 13.0267 6.97104 13.4584 6.6826C13.89 6.39417 14.2265 5.9842 14.4252 5.50454C14.6239 5.02489 14.6758 4.49709 14.5746 3.98788C14.4733 3.47869 14.2233 3.01095 13.8562 2.64384C13.489 2.27673 13.0213 2.02672 12.5121 1.92544C12.0029 1.82415 11.4751 1.87613 10.9955 2.07481C10.5158 2.27349 10.1058 2.60995 9.81739 3.04162C9.52895 3.4733 9.375 3.98082 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35615C10.6361 6.84844 11.3038 7.125 12 7.125Z" fill="currentColor"/></svg>',	
	notebook: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.25 7.5H19.5V9H14.25V7.5ZM14.25 11.25H19.5V12.75H14.25V11.25ZM14.25 15H19.5V16.5H14.25V15Z" fill="currentColor"/><path d="M21 3.75H3C2.6023 3.7504 2.221 3.90856 1.93978 4.18978C1.65856 4.471 1.5004 4.8523 1.5 5.25V18.75C1.5004 19.1477 1.65856 19.529 1.93978 19.8102C2.221 20.0914 2.6023 20.2496 3 20.25H21C21.3976 20.2494 21.7788 20.0912 22.06 19.81C22.3412 19.5288 22.4994 19.1476 22.5 18.75V5.25C22.4996 4.8523 22.3414 4.471 22.0602 4.18978C21.779 3.90856 21.3977 3.7504 21 3.75ZM3 5.25H11.25V18.75H3V5.25ZM12.75 18.75V5.25H21L21.0015 18.75H12.75Z" fill="currentColor"/></svg>',
	logo: '<svg width="74" height="48" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.065 6.01888L24.0461 0H12.0352L24.0461 12.011V23.9976L30.065 18.0274L36.0839 12.0085L30.065 6.01401V6.01888Z" fill="#AE9FE8"/><path d="M6.01888 17.9811L12.0378 24H24.0487L12.0378 11.989V0L6.01888 5.97016L0 11.9866L6.01888 17.9811Z" fill="#AE9FE8"/></svg>',
	monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5 1.5H22.5V4.5H19.5V1.5ZM19.5 6H22.5V9H19.5V6ZM15 1.5H18V4.5H15V1.5ZM15 6H18V9H15V6Z" fill="currentColor"/><path d="M21 12V16.5H3V4.5H12V3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V16.5C1.5 16.8978 1.65804 17.2794 1.93934 17.5607C2.22064 17.842 2.60218 18 3 18H9V21H6V22.5H18V21H15V18H21C21.3978 18 21.7794 17.842 22.0607 17.5607C22.342 17.2794 22.5 16.8978 22.5 16.5V12H21ZM13.5 21H10.5V18H13.5V21Z" fill="currentColor"/></svg>',
	play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.25 17.2501C8.05109 17.2501 7.86032 17.1711 7.71967 17.0304C7.57902 16.8898 7.5 16.699 7.5 16.5001V7.50009C7.50007 7.37229 7.53279 7.24664 7.59506 7.13504C7.65733 7.02344 7.74708 6.92961 7.8558 6.86244C7.96451 6.79527 8.08859 6.757 8.21626 6.75125C8.34392 6.7455 8.47093 6.77246 8.58525 6.82959L17.5853 11.3296C17.7097 11.3919 17.8143 11.4877 17.8874 11.6061C17.9605 11.7245 17.9992 11.8609 17.9992 12.0001C17.9992 12.1393 17.9605 12.2757 17.8874 12.3941C17.8143 12.5125 17.7097 12.6082 17.5853 12.6706L8.58525 17.1706C8.48117 17.2227 8.3664 17.2499 8.25 17.2501ZM9 8.71359V15.2866L15.573 12.0001L9 8.71359Z" fill="currentColor"/><path d="M12 3C13.78 3 15.5201 3.52784 17.0001 4.51677C18.4802 5.50571 19.6337 6.91131 20.3149 8.55585C20.9961 10.2004 21.1743 12.01 20.8271 13.7558C20.4798 15.5016 19.6226 17.1053 18.364 18.364C17.1053 19.6226 15.5016 20.4798 13.7558 20.8271C12.01 21.1743 10.2004 20.9961 8.55585 20.3149C6.91132 19.6337 5.50571 18.4802 4.51678 17.0001C3.52785 15.5201 3 13.78 3 12C3 9.61305 3.94822 7.32387 5.63604 5.63604C7.32387 3.94821 9.61306 3 12 3ZM12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5Z" fill="currentColor" /></svg>',
	save: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16.172C16.7024 3.00011 17.211 3.2109 17.586 3.586L20.414 6.414C20.7891 6.78899 20.9999 7.29761 21 7.828V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19Z" stroke="currentColor" stroke-width="1.5"/><path d="M8.6 9H15.4C15.5591 9 15.7117 8.93679 15.8243 8.82426C15.9368 8.71174 16 8.55913 16 8.4V3.6C16 3.44087 15.9368 3.28826 15.8243 3.17574C15.7117 3.06321 15.5591 3 15.4 3H8.6C8.44087 3 8.28826 3.06321 8.17574 3.17574C8.06321 3.28826 8 3.44087 8 3.6V8.4C8 8.55913 8.06321 8.71174 8.17574 8.82426C8.28826 8.93679 8.44087 9 8.6 9ZM6 13.6V21H18V13.6C18 13.4409 17.9368 13.2883 17.8243 13.1757C17.7117 13.0632 17.5591 13 17.4 13H6.6C6.44087 13 6.28826 13.0632 6.17574 13.1757C6.06321 13.2883 6 13.4409 6 13.6Z" stroke="currentColor" stroke-width="1.5"/></svg>',
	undo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 7.5H5.86125L8.5515 4.8105L7.5 3.75L3 8.25L7.5 12.75L8.5515 11.6888L5.8635 9H15C16.1935 9 17.3381 9.47411 18.182 10.318C19.0259 11.1619 19.5 12.3065 19.5 13.5C19.5 14.6935 19.0259 15.8381 18.182 16.682C17.3381 17.5259 16.1935 18 15 18H9V19.5H15C16.5913 19.5 18.1174 18.8679 19.2426 17.7426C20.3679 16.6174 21 15.0913 21 13.5C21 11.9087 20.3679 10.3826 19.2426 9.25736C18.1174 8.13214 16.5913 7.5 15 7.5Z" fill="currentColor"/></svg>',
	redo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 7.5H18.1388L15.4485 4.8105L16.5 3.75L21 8.25L16.5 12.75L15.4485 11.6888L18.1365 9H9C7.80653 9 6.66193 9.47411 5.81802 10.318C4.97411 11.1619 4.5 12.3065 4.5 13.5C4.5 14.6935 4.97411 15.8381 5.81802 16.682C6.66193 17.5259 7.80653 18 9 18H15V19.5H9C7.4087 19.5 5.88258 18.8679 4.75736 17.7426C3.63214 16.6174 3 15.0913 3 13.5C3 11.9087 3.63214 10.3826 4.75736 9.25736C5.88258 8.13214 7.4087 7.5 9 7.5Z" fill="currentColor"/></svg>',
	settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.2499 12.5696V11.4221L21.6899 10.1621C21.9554 9.92811 22.1296 9.60784 22.1817 9.25787C22.2339 8.9079 22.1606 8.55076 21.9749 8.24957L20.2049 5.24957C20.0734 5.02177 19.8843 4.83256 19.6566 4.70092C19.4288 4.56928 19.1705 4.49984 18.9074 4.49957C18.7444 4.49832 18.5823 4.52366 18.4274 4.57457L16.6049 5.18957C16.2903 4.98048 15.9621 4.79256 15.6224 4.62707L15.2399 2.73707C15.1714 2.39178 14.9835 2.0816 14.7093 1.86085C14.4351 1.6401 14.0919 1.52283 13.7399 1.52957H10.2299C9.87797 1.52283 9.53483 1.6401 9.2606 1.86085C8.98638 2.0816 8.79853 2.39178 8.72995 2.73707L8.34745 4.62707C8.0054 4.79252 7.67467 4.98043 7.35745 5.18957L5.57245 4.54457C5.41592 4.50379 5.25383 4.48859 5.09245 4.49957C4.8294 4.49984 4.57105 4.56928 4.34332 4.70092C4.11558 4.83256 3.92647 5.02177 3.79495 5.24957L2.02495 8.24957C1.84989 8.55031 1.78483 8.90257 1.84093 9.246C1.89703 9.58943 2.07079 9.90267 2.33245 10.1321L3.74995 11.4296V12.5771L2.33245 13.8371C2.0634 14.0681 1.88489 14.3869 1.82859 14.737C1.7723 15.0871 1.84187 15.4459 2.02495 15.7496L3.79495 18.7496C3.92647 18.9774 4.11558 19.1666 4.34332 19.2982C4.57105 19.4299 4.8294 19.4993 5.09245 19.4996C5.25546 19.5008 5.41758 19.4755 5.57245 19.4246L7.39495 18.8096C7.7096 19.0187 8.03783 19.2066 8.37745 19.3721L8.75995 21.2621C8.82853 21.6074 9.01638 21.9175 9.2906 22.1383C9.56483 22.3591 9.90797 22.4763 10.2599 22.4696H13.7999C14.1519 22.4763 14.4951 22.3591 14.7693 22.1383C15.0435 21.9175 15.2314 21.6074 15.2999 21.2621L15.6824 19.3721C16.0245 19.2066 16.3552 19.0187 16.6724 18.8096L18.4874 19.4246C18.6423 19.4755 18.8044 19.5008 18.9674 19.4996C19.2305 19.4993 19.4888 19.4299 19.7166 19.2982C19.9443 19.1666 20.1334 18.9774 20.2649 18.7496L21.9749 15.7496C22.15 15.4488 22.2151 15.0966 22.159 14.7532C22.1029 14.4097 21.9291 14.0965 21.6674 13.8671L20.2499 12.5696ZM18.9074 17.9996L16.3349 17.1296C15.7327 17.6397 15.0445 18.0384 14.3024 18.3071L13.7699 20.9996H10.2299L9.69745 18.3371C8.96126 18.0608 8.27673 17.6627 7.67245 17.1596L5.09245 17.9996L3.32245 14.9996L5.36245 13.1996C5.22377 12.4232 5.22377 11.6284 5.36245 10.8521L3.32245 8.99957L5.09245 5.99957L7.66495 6.86957C8.26715 6.35949 8.9554 5.96076 9.69745 5.69207L10.2299 2.99957H13.7699L14.3024 5.66207C15.0386 5.93839 15.7232 6.33643 16.3274 6.83957L18.9074 5.99957L20.6774 8.99957L18.6374 10.7996C18.7761 11.5759 18.7761 12.3707 18.6374 13.1471L20.6774 14.9996L18.9074 17.9996Z" fill="currentColor"/><path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.506 12.5926 16.3937 13.1805 16.1697 13.7292C15.9457 14.2779 15.6145 14.7763 15.1954 15.1954C14.7763 15.6145 14.2779 15.9457 13.7292 16.1697C13.1805 16.3937 12.5926 16.506 12 16.5ZM12 9C11.6035 8.99077 11.2093 9.06205 10.8411 9.20954C10.473 9.35704 10.1386 9.57768 9.85812 9.85812C9.57768 10.1386 9.35704 10.473 9.20954 10.8411C9.06205 11.2093 8.99077 11.6035 9 12C8.99077 12.3965 9.06205 12.7907 9.20954 13.1589C9.35704 13.527 9.57768 13.8615 9.85812 14.1419C10.1386 14.4223 10.473 14.643 10.8411 14.7905C11.2093 14.938 11.6035 15.0092 12 15C12.3965 15.0092 12.7907 14.938 13.1589 14.7905C13.527 14.643 13.8615 14.4223 14.1419 14.1419C14.4223 13.8615 14.643 13.527 14.7905 13.1589C14.938 12.7907 15.0092 12.3965 15 12C15.0092 11.6035 14.938 11.2093 14.7905 10.8411C14.643 10.473 14.4223 10.1386 14.1419 9.85812C13.8615 9.57768 13.527 9.35704 13.1589 9.20954C12.7907 9.06205 12.3965 8.99077 12 9Z" fill="currentColor"/></svg>',
	share: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	sql: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M18 2.25H6C5.60218 2.25 5.22064 2.40804 4.93934 2.68934C4.65804 2.97064 4.5 3.35218 4.5 3.75V20.25C4.5 20.6478 4.65804 21.0294 4.93934 21.3107C5.22064 21.592 5.60218 21.75 6 21.75H18C18.3978 21.75 18.7794 21.592 19.0607 21.3107C19.342 21.0294 19.5 20.6478 19.5 20.25V3.75C19.5 3.35218 19.342 2.97064 19.0607 2.68934C18.7794 2.40804 18.3978 2.25 18 2.25ZM18 3.75V8.25H6V3.75H18ZM6 14.25V9.75H18V14.25H6ZM6 20.25V15.75H18V20.25H6Z" fill="currentColor"/><path d="M8.25 6.75C8.66421 6.75 9 6.41421 9 6C9 5.58579 8.66421 5.25 8.25 5.25C7.83579 5.25 7.5 5.58579 7.5 6C7.5 6.41421 7.83579 6.75 8.25 6.75Z" fill="currentColor"/><path d="M8.25 12.75C8.66421 12.75 9 12.4142 9 12C9 11.5858 8.66421 11.25 8.25 11.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75Z" fill="currentColor"/><path d="M8.25 18.75C8.66421 18.75 9 18.4142 9 18C9 17.5858 8.66421 17.25 8.25 17.25C7.83579 17.25 7.5 17.5858 7.5 18C7.5 18.4142 7.83579 18.75 8.25 18.75Z" fill="currentColor"/></svg>',
	status: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 13.5C4.90129 13.4995 4.80493 13.4698 4.72307 13.4146C4.64121 13.3595 4.57751 13.2813 4.54 13.19L2.165 7.5H0V6.5H2.5C2.59871 6.5005 2.69507 6.5302 2.77693 6.58536C2.85879 6.64053 2.92249 6.71869 2.96 6.81L5 11.64L9.03 0.825003C9.06576 0.729302 9.12997 0.646852 9.214 0.588746C9.29803 0.530641 9.39784 0.499671 9.5 0.500003C9.60311 0.501804 9.70314 0.535443 9.78638 0.59631C9.86963 0.657178 9.93202 0.742296 9.965 0.840003L11.86 6.5H14V7.5H11.5C11.3952 7.50027 11.2929 7.46759 11.2077 7.40658C11.1224 7.34557 11.0585 7.25931 11.025 7.16L9.5 2.5L5.47 13.175C5.43424 13.2707 5.37003 13.3532 5.286 13.4113C5.20197 13.4694 5.10216 13.5003 5 13.5Z" fill="currentColor"/></svg>',
	stop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8M9 9v6h6V9"/></svg>',
	text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.1528 10.32L19.68 7.84729C19.457 7.62489 19.1549 7.5 18.84 7.5C18.5251 7.5 18.223 7.62489 18 7.84729L7.5 18.3503V22.5H11.6497L22.1528 12C22.3752 11.7771 22.5 11.475 22.5 11.16C22.5 10.8451 22.3752 10.543 22.1528 10.32ZM11.028 21H9V18.972L16.08 11.8913L18.1088 13.9193L11.028 21ZM19.17 12.8588L17.142 10.8308L18.8422 9.13054L20.8702 11.1585L19.17 12.8588Z" fill="currentColor"/><path d="M8.25 12.75H9.75V7.5H12V6H6V7.5H8.25V12.75Z" fill="currentColor"/><path d="M6 15H3V3H15V6H16.5V3C16.5 2.60218 16.342 2.22064 16.0607 1.93934C15.7794 1.65804 15.3978 1.5 15 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H6V15Z" fill="currentColor"/></svg>',
	visibility: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.2047 11.745C22.3226 9.46324 20.7912 7.48996 18.7998 6.06906C16.8084 4.64817 14.4443 3.84193 11.9997 3.75C9.55507 3.84193 7.19097 4.64817 5.19958 6.06906C3.20819 7.48996 1.6768 9.46324 0.794681 11.745C0.735106 11.9098 0.735106 12.0902 0.794681 12.255C1.6768 14.5368 3.20819 16.51 5.19958 17.9309C7.19097 19.3518 9.55507 20.1581 11.9997 20.25C14.4443 20.1581 16.8084 19.3518 18.7998 17.9309C20.7912 16.51 22.3226 14.5368 23.2047 12.255C23.2643 12.0902 23.2643 11.9098 23.2047 11.745ZM11.9997 18.75C8.02468 18.75 3.82468 15.8025 2.30218 12C3.82468 8.1975 8.02468 5.25 11.9997 5.25C15.9747 5.25 20.1747 8.1975 21.6972 12C20.1747 15.8025 15.9747 18.75 11.9997 18.75Z" fill="currentColor"/><path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49994 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18869 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45543 13.6962 9.22836 13.148C9.0013 12.5999 8.94189 11.9967 9.05765 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15Z" fill="currentColor"/></svg>',
	copilot:'<svg width="24" height="24" viewBox="0 0 256 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><title>GitHub Copilot</title><path d="M205.28,31.36 C219.376,46.24 225.296,66.56 227.792,95.04 C234.417867,95.04 240.5968,96.5093333 244.768,102.192 L252.56,112.752 C254.8,115.792 256,119.424 256,123.2 L256,151.888 C255.992,155.592267 254.1568,159.203467 251.168,161.392 C215.885333,187.222133 172.3496,208 128,208 C78.9344,208 29.8098667,179.726667 4.832,161.392 C1.84330667,159.203467 0.00722666667,155.592267 0,151.888 L0,123.2 C0,119.424 1.2,115.776 3.424,112.736 L11.216,102.192 C15.3891733,96.5349333 21.5953067,95.04 28.208,95.04 C30.704,66.56 36.608,46.24 50.72,31.36 C77.3312,3.1648 112.56728,0.06016 127.552142,0.00088672 L128,0 C142.72,0 178.4,2.88 205.28,31.36 Z M128.016,78.736 C124.976,78.736 121.472,78.912 117.744,79.28 C116.432,84.176 114.496,88.592 111.664,91.408 C100.464,102.608 86.96,104.336 79.728,104.336 C72.9258667,104.336 65.8005333,102.915733 59.984,99.248 C54.4816,101.056 49.1978667,103.6632 48.848,110.16 C48.2621333,122.440533 48.2112,134.709333 48.1602667,146.984 C48.1336,153.144533 48.1093333,159.3064 48.016,165.472 C48.04,169.050667 50.1978667,172.3752 53.456,173.856 C79.936,185.92 104.976,192 128.016,192 C151.024,192 176.064,185.92 202.528,173.856 C205.786133,172.3752 207.9432,169.050667 207.968,165.472 C208.285333,147.0536 208.029867,128.560267 207.152,110.16 L207.168,110.16 C206.826133,103.625867 201.520267,101.061867 196,99.248 C190.179467,102.899733 183.072533,104.336 176.272,104.336 C169.04,104.336 155.552,102.608 144.336,91.408 C141.504,88.592 139.568,84.176 138.256,79.28 C134.853333,78.9338667 131.436,78.7525333 128.016,78.736 Z M101.074933,122.666667 C106.8232,122.666667 111.4832,127.326667 111.4832,133.074933 L111.4832,152.2584 C111.4832,158.006667 106.8232,162.666667 101.074933,162.666667 C95.3266667,162.666667 90.6666667,158.006667 90.6666667,152.2584 L90.6666667,133.074933 C90.6666667,127.326667 95.3266667,122.666667 101.074933,122.666667 Z M154.408267,122.666667 C160.156533,122.666667 164.816533,127.326667 164.816533,133.074933 L164.816533,133.074933 L164.816533,152.2584 C164.816533,158.006667 160.156533,162.666667 154.408267,162.666667 C148.66,162.666667 144,158.006667 144,152.2584 L144,152.2584 L144,133.074933 C144,127.326667 148.66,122.666667 154.408267,122.666667 Z M81.44,28.32 C70.24,29.44 60.8,33.12 56,38.24 C45.6,49.6 47.84,78.4 53.76,84.48 C58.08,88.8 66.24,91.68 75.04,91.68 C81.76,91.68 94.56,90.24 105.12,79.52 C109.76,75.04 112.64,63.84 112.32,52.48 C112,43.36 109.44,35.84 105.6,32.64 C101.44,28.96 92,27.36 81.44,28.32 Z M150.4,32.64 C146.56,35.84 144,43.36 143.68,52.48 C143.36,63.84 146.24,75.04 150.88,79.52 C161.44,90.24 174.24,91.68 180.96,91.68 C189.76,91.68 197.92,88.8 202.24,84.48 C208.16,78.4 210.4,49.6 200,38.24 C195.2,33.12 185.76,29.44 174.56,28.32 C164,27.36 154.56,28.96 150.4,32.64 Z M128,56 C125.44,56 122.4,56.16 119.04,56.48 C119.36,58.24 119.52,60.16 119.68,62.24 C119.68,63.68 119.68,65.12 119.52,66.72 C122.72,66.4 125.44,66.4 128,66.4 C130.559733,66.4 133.28,66.4 136.48,66.72 C136.32,65.12 136.32,63.6802667 136.32,62.2402667 C136.48,60.1602667 136.64,58.24 136.96,56.48 C133.6,56.16 130.56,56 128,56 Z" fill="#5F7F93"></path></svg>'
}

const ztIcon: IconSet = {
	component: (props: IconProps) => h(props.tag, { ...props, innerHTML: props.icon as string }),
  };
  

export { ztAliases, ztIcon }
