import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotWindowComponent } from './chat-bot-window.component';

describe('ChatBotWindowComponent', () => {
  let component: ChatBotWindowComponent;
  let fixture: ComponentFixture<ChatBotWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatBotWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBotWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
